import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';


export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
  
    @Post()
    async create(@Body() createTaskDto: any) {
      return this.tasksService.create(createTaskDto);
    }
  
    @Get()
    async findAll() {
      return this.tasksService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.tasksService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: any) {
      return this.tasksService.update(id, updateTaskDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.tasksService.delete(id);
    }
  }