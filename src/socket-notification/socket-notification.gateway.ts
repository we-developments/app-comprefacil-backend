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

@WebSocketGateway()
export class SocketNotificationGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('notificationSocket');

  @SubscribeMessage('notificationToServer')
  handleMessage(client: any, payload: any): void {
    this.server.emit('notificationToClient', payload);
  }

  afterInit(server: Server) {
    this.logger.log('socket init successfully');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Cliente connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
