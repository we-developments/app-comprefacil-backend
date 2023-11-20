import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsString,
  IsArray,
  ValidateNested,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';
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
  readonly id: string;

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

export class CreateTaskDto {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  readonly finishDate: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly taskDescription: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly taskName: string;

  @ApiProperty({ type: [UserDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  readonly selectedUsers: UserDto[];

  @ApiProperty({ type: [ChecklistItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChecklistItemDto)
  readonly checklist: ChecklistItemDto[];

  @ApiProperty()
  @ValidateNested()
  @Type(() => SelectedSectorDto)
  readonly selectedSector: SelectedSectorDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ description: 'the date of the created position' })
  readonly createdAt?: Date;

  @IsDate()
  @ApiProperty({ description: 'the date of the updated position' })
  readonly updatedAt: Date;

}
