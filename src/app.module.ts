import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://brunodin:tlwr541g@cluster0.wyvff7p.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    TasksModule,
    PositionsModule,
    PositionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
