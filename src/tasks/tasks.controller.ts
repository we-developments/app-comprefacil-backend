import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
  
    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
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
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
      return this.tasksService.update(id, updateTaskDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.tasksService.delete(id);
    }
}