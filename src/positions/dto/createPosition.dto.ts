import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class createPositionDto {
  @IsString()
  @ApiProperty({ description: 'The name of de position' })
  readonly name: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'the date of the created position' })
  readonly createdAt?: Date;

  @IsDate()
  @ApiProperty({ description: 'the date of the updated position' })
  readonly updatedAt: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'the date of the deleted position' })
  readonly deletedAt: Date;
}
