import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';
import { Sectors, SectorsSchema } from './schemas/sectors.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sectors.name, schema: SectorsSchema }]),
  ],
  providers: [SectorsService],
  controllers: [SectorsController],
  exports: [SectorsService],
})
export class SectorsModule {}
