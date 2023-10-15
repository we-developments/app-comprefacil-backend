import {
  IsString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: 'The name of the user.' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ description: 'The email of the user.' })
  readonly email: string;

  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly uid: string;

  @IsString()
  @ApiProperty({ description: 'The sector of the user.' })
  readonly sector: string;

  @IsString()
  @ApiProperty({ description: 'The jobTitle of the user.' })
  readonly jobTitle: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Indicates if the user is an admin.',
    required: false,
    default: false,
  })
  readonly isAdmin?: boolean;

  @IsNumber()
  @ApiProperty({ description: 'The age of the user.' })
  readonly age: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Indicates if the user is active.',
    required: false,
    default: false,
  })
  readonly isActive?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The profile picture of the user.',
    required: false,
  })
  readonly profilePicture?: string;
}
