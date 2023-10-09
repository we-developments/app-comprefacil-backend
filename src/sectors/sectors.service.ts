import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sectors, SectorsDocument } from './schemas/positions.schema';
import { Model } from 'mongoose';
import { CreateSectorDto } from './dto/createSector.dto';
import { UpdateSectorDto } from './dto/updateSector.dto';

@Injectable()
export class SectorsService {
  constructor(
    @InjectModel(Sectors.name) private sectorsModel: Model<SectorsDocument>,
  ) {}

  async create(createSectorsModel: CreateSectorDto): Promise<Sectors> {
    const createSector = new this.sectorsModel(createSectorsModel);
    return createSector.save();
  }

  async findAll(): Promise<Sectors[]> {
    return this.sectorsModel.find().exec();
  }

  async findOne(id: string): Promise<Sectors> {
    return this.sectorsModel.findById(id).exec();
  }

  async update(id: string, updateSectorDto: UpdateSectorDto): Promise<Sectors> {
    return this.sectorsModel.findByIdAndUpdate(id, updateSectorDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<Sectors> {
    return this.sectorsModel.findByIdAndDelete(id);
  }
}
