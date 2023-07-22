import { IsString, IsEmail, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: 'The name of the user.' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ description: 'The email of the user.' })
  readonly email: string;

  @IsString()
  @ApiProperty({ description: 'The sector of the user.' })
  readonly sector: string;

  @IsString()
  @ApiProperty({ description: 'The password of the user.' })
  readonly password: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ description: 'Indicates if the user is an admin.', required: false })
  readonly isAdmin?: boolean;

  @IsNumber()
  @ApiProperty({ description: 'The age of the user.' })
  readonly age: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ description: 'Indicates if the user is active.', required: false })
  readonly isActive?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The profile picture of the user.', required: false })
  readonly profilePicture?: string;

  @IsString()
  @ApiProperty({ description: 'The role of the user.' })
  readonly role: string;
}