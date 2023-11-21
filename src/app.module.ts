import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { PositionsModule } from './positions/positions.module';
import { SectorsModule } from './sectors/sectors.module';
import { NotificationModule } from './notification/notification.module';
import { SocketNotificationGateway } from './socket-notification/socket-notification.gateway';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://brunodin:tlwr541g@cluster0.wyvff7p.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    TasksModule,
    PositionsModule,
    SectorsModule,
    NotificationModule,
  ],
  controllers: [],
  providers: [SocketNotificationGateway],
})
export class AppModule {}
