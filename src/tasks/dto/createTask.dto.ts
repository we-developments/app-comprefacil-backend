import { IsString, IsDate, IsOptional, IsArray, IsMongoId } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsDate()
  readonly startDate?: Date;

  @IsOptional()
  @IsDate()
  readonly endDate?: Date;

  @IsMongoId()
  readonly responsibleUser: string;

  @IsOptional()
  @IsString({ each: true })
  readonly proofImages?: string[];
  
  @IsOptional()
  @IsString({ each: true })
  readonly status?: 'To Do' | 'In Progress' | 'Done';
}