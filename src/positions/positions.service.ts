import { Injectable } from '@nestjs/common';
import { Positions, PositionsDocument } from './schemas/positions.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PositionsService {
  constructor(
    @InjectModel(Positions.name)
    private positionsModel: Model<PositionsDocument>,
  ) {}

  async create(createPositionDto: any): Promise<Positions> {
    const createPosition = new this.positionsModel(createPositionDto);
    return createPosition.save();
  }

  async findAll(): Promise<Positions[]> {
    return this.positionsModel.find().exec();
  }

  async findOne(id: string): Promise<Positions> {
    return this.positionsModel.findById(id).exec();
  }

  async update(id: string, updatePositionDto: any): Promise<Positions> {
    return this.positionsModel.findByIdAndUpdate(id, updatePositionDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<Positions> {
    return this.positionsModel.findByIdAndRemove(id);
  }
}
