import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PositionsService } from './positions.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePositionDto } from './dto/createPosition.dto';
import { UpdatePositionDto } from './dto/updatePosition.dto';

@ApiTags('positions')
@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
  })
  @ApiBody({ type: CreatePositionDto })
  async create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionsService.create(createPositionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all positions' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  async findAll() {
    return this.positionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a position by ID' })
  @ApiResponse({ status: 200, description: 'Successful operation' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the position' })
  async findOne(@Param('id') id: string) {
    return this.positionsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update position by id' })
  async update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionsService.update(id, updatePositionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a position by id' })
  @ApiResponse({
    status: 200,
    description: 'The position has been successfully deleted.',
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the position' })
  async delete(@Param('id') id: string) {
    return this.positionsService.delete(id);
  }
}
