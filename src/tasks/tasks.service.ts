import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: any): Promise<Task> {
    if (
      createTaskDto.finishDate &&
      typeof createTaskDto.finishDate === 'string'
    ) {
      createTaskDto.finishDate = new Date(createTaskDto.finishDate);
    }

    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }
  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateTaskDto: any): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
  }

  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(id, {});
  }
}
