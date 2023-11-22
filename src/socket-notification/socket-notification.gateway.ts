import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common/services';

@WebSocketGateway({
  cors: '*',
})
export class SocketNotificationGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('notificationSocket');
  private connectedUser: Map<string, any> = new Map();

  @SubscribeMessage('notificationToServer')
  handleMessage(client: any, payload: any): void {
    const { userId, notificationData } = payload;
    if (notificationData) {
      const usersToNotify: string[] = notificationData.usersReceiveNotification;

      const connectedUsersIds = Array.from(this.connectedUser.keys());

      const usersOnlineToNotify = usersToNotify.filter((userId) =>
        connectedUsersIds.includes(userId),
      );

      usersOnlineToNotify.forEach((userId) => {
        const userSocketId = this.connectedUser.get(userId);
        if (userSocketId) {
          this.server
            .to(userSocketId.userIdSocket)
            .emit('notificationToClient', notificationData);
        }
      });
    }
  }

  afterInit(server: Server) {
    this.logger.log('socket init successfully');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Cliente connected: ${client.id}`);
    const userId = client.handshake.query.userId as string;

    if (userId) {
      this.connectedUser.set(userId, {
        userIdSocket: client.id,
        userId: userId,
      });
    }
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    this.connectedUser.delete(client.id);
  }
}
