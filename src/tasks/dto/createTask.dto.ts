import {
  IsString,
  IsDate,
  IsOptional,
  IsArray,
  IsMongoId,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @ApiProperty({ description: 'The name of the task.' })
  readonly name: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'The start date of the task.', required: false })
  readonly startDate?: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'The end date of the task.', required: false })
  readonly endDate?: Date;

  @IsMongoId()
  @ApiProperty({ description: 'The responsible user for the task.' })
  readonly responsibleUser: string;

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({
    description: 'The proof images for the task.',
    required: false,
  })
  readonly proofImages?: string[];

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({ description: 'The status of the task.', required: false })
  readonly status?: 'To Do' | 'In Progress' | 'Done';
}
