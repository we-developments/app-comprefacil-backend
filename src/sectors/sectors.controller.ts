import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SectorsService } from './sectors.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateSectorDto } from './dto/createSector.dto';
import { UpdateSectorDto } from './dto/updateSector.dto';

@Controller('sectors')
export class SectorsController {
  constructor(private readonly sectorsService: SectorsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The sector as been successfully created.',
  })
  @ApiBody({ type: CreateSectorDto })
  @ApiOperation({ summary: 'Create sector' })
  async create(@Body() createSectorDto: CreateSectorDto) {
    return this.sectorsService.create(createSectorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sectors' })
  @ApiResponse({ status: 200, description: 'Successfully operation' })
  async findAll() {
    return this.sectorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a sector by ID' })
  @ApiResponse({ status: 200, description: 'Successfully operation' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the sector' })
  async findOne(@Param('id') id: string) {
    return this.sectorsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Updade a sector by ID' })
  @ApiResponse({ status: 200, description: 'Successfully operation' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the sector' })
  async update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdateSectorDto,
  ) {
    return this.sectorsService.update(id, updatePositionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a sector by ID' })
  @ApiResponse({
    status: 201,
    description: 'The sector has been successfully deleted.',
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the sector' })
  async delete(@Param('id') id: string) {
    return this.sectorsService.delete(id);
  }
}
