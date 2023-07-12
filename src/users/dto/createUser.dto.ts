import { IsString, IsEmail, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly sector: string;

  @IsString()
  readonly password: string;

  @IsOptional()
  @IsBoolean()
  readonly isAdmin?: boolean;

  @IsNumber()
  readonly age: number;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;

  @IsOptional()
  @IsString()
  readonly profilePicture?: string;

  @IsString()
  readonly role: string;
}