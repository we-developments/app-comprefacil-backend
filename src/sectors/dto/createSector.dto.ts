import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateSectorDto {
  @IsString()
  @ApiProperty({ description: 'The name of de sector' })
  readonly name: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'the date of the created sector' })
  readonly createdAt?: Date;

  @IsDate()
  @ApiProperty({ description: 'the date of the updated sector' })
  readonly updatedAt: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'the date of the deleted sector' })
  readonly deletedAt: Date;
}
