import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
  })
  @ApiBody({ type: CreateTaskDto })
  async create(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto, "aqui")
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all tasks' })
  @ApiResponse({ status: 200, description: 'Successful operation.' })
  async findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by id' })
  @ApiResponse({ status: 200, description: 'Successful operation.' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the task' })
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task by id' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated.',
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the task' })
  @ApiBody({ type: UpdateTaskDto })
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by id' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully deleted.',
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the task' })
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
