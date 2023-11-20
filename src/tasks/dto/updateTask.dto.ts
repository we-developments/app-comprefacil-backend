import {
  IsString,
  IsDate,
  IsOptional,
  IsArray,
  IsMongoId,
  ValidateNested,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class ChecklistItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly done: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly note: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  readonly images: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly imagesRequired: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly obsResponsavel: string;
}

class SelectedSectorDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly _id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

}

class UserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly uid: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly sector: string;
}

export class UpdateTaskDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly finishDate?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly taskDescription?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly taskName?: string;

  @ApiProperty({ type: [UserDto], required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  readonly selectedUsers: UserDto[];

  @ApiProperty({ type: [ChecklistItemDto], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChecklistItemDto)
  readonly checklist?: ChecklistItemDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => SelectedSectorDto)
  readonly selectedSector?: SelectedSectorDto;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly status?: string;
}
