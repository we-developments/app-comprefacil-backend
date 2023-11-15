import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, IsArray, ValidateNested, IsNumber, IsBoolean } from 'class-validator';
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
  readonly id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly online: boolean;
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

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  readonly selectedUsers: string[];

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
}
