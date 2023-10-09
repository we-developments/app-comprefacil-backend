import {
  IsString,
  IsDate,
  IsOptional,
  IsArray,
  IsMongoId,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The updated name of the task.',
    required: false,
  })
  readonly name?: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: 'The updated start date of the task.',
    required: false,
  })
  readonly startDate?: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: 'The updated end date of the task.',
    required: false,
  })
  readonly endDate?: Date;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    description: 'The updated responsible user for the task.',
    required: false,
  })
  readonly responsibleUser?: string;

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({
    description: 'The updated proof images for the task.',
    required: false,
  })
  readonly proofImages?: string[];

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({
    description: 'The updated status of the task.',
    required: false,
  })
  readonly status?: 'To Do' | 'In Progress' | 'Done';
}
