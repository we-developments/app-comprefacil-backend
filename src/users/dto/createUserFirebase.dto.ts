import { IsString, IsEmail, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserFirebaseDto {
  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ description: 'The email of the user.' })
  readonly email: string;

  @IsBoolean()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly isActive: string;

  @IsBoolean()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly isAdmin: string;

  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly sector: string;

  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly jobTitle: string;

  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly profilePicture: string;
}
