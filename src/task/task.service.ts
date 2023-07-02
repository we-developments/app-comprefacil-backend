import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateTaskDto>) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}