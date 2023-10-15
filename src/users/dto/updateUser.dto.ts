import {
  IsString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The updated name of the user.',
    required: false,
  })
  readonly name?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: 'The updated email of the user.',
    required: false,
  })
  readonly email?: string;

  @IsString()
  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth', required: true })
  readonly uid?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The updated sector of the user.',
    required: false,
  })
  readonly sector?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The jobTitle sector of the user.',
    required: false,
  })
  readonly jobTitle?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Indicates if the user is an admin.',
    required: false,
  })
  readonly isAdmin?: boolean;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: 'The updated age of the user.', required: false })
  readonly age?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Indicates if the user is active.',
    required: false,
  })
  readonly isActive?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The updated profile picture of the user.',
    required: false,
  })
  readonly profilePicture?: string;
}
