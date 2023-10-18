import { IsString, IsEmail, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserFirebaseDto {
  @IsString()
  @ApiProperty({ description: 'The name by firebase auth' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ description: 'The email of the user.' })
  readonly email: string;

  @IsBoolean()
  @ApiProperty({ description: 'The isActive by firebase auth' })
  readonly isActive: string;

  @IsBoolean()
  @ApiProperty({ description: 'The isAdmin by firebase auth' })
  readonly isAdmin: string;

  @IsString()
  @ApiProperty({ description: 'The sector by firebase auth' })
  readonly sector: string;

  @IsString()
  @ApiProperty({ description: 'The jobTitle by firebase auth' })
  readonly jobTitle: string;

  @IsString()
  @ApiProperty({ description: 'The profilePicture by firebase auth' })
  readonly profilePicture: string;

  @IsString()
  @ApiProperty({ description: 'The _id by firebase auth' })
  readonly _id: string;
}
