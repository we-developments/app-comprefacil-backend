import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sectors, SectorsSchema } from './schemas/positions.schema';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sectors.name, schema: SectorsSchema }]),
  ],
  providers: [SectorsService],
  controllers: [SectorsController],
  exports: [SectorsService],
})
export class SectorsModule {}
