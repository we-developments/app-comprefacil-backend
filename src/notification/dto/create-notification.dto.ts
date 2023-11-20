import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({ description: 'User who sent the notification' })
  @IsString()
  userSendNotification: string;

  @ApiProperty({ description: 'User who receive the notification' })
  @IsArray()
  usersReceiveNotification: string[];

  @ApiProperty({ description: 'User read the notification' })
  @IsString()
  wasReadNotification: boolean;

  @ApiProperty({ description: 'Notification message' })
  @IsString()
  messageNotification: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date | null;
}
