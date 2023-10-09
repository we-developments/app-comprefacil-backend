import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PositionsSchema, Positions } from './schemas/positions.schema';
import { PositionsService } from './positions.service';
import { PositionsController } from './positions.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Positions.name, schema: PositionsSchema },
    ]),
  ],
  providers: [PositionsService],
  controllers: [PositionsController],
  exports: [PositionsService],
})
export class PositionsModule {}
