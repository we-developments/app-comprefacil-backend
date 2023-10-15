import { IsString, IsEmail, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserDto {
  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly uid: string;

  @IsString()
  @ApiProperty({ description: 'The uid by firebase auth' })
  readonly id: string;
}
