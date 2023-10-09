import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdatePositionDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The updated name of the position',
    required: false,
  })
  readonly name?: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: 'The updated start date of the position.',
    required: false,
  })
  readonly createdAt?: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: 'The updated the date of the position.',
    required: false,
  })
  readonly updatedAt?: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({
    description: 'The updated delete date of the position.',
    required: false,
  })
  readonly deletedAt?: Date;
}
