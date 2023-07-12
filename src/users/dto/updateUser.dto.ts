import { IsString, IsEmail, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly sector?: string;

  @IsOptional()
  @IsString()
  readonly password?: string;

  @IsOptional()
  @IsBoolean()
  readonly isAdmin?: boolean;

  @IsOptional()
  @IsNumber()
  readonly age?: number;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;

  @IsOptional()
  @IsString()
  readonly profilePicture?: string;

  @IsOptional()
  @IsString()
  readonly role?: string;
}