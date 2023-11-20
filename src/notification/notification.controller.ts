import {
  Controller,
  Get,
  Post,
  Body,
  Sse,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Get('user/:uid')
  findAllByUserNotification(@Param('uid') uid: string) {
    return this.notificationService.findAllByUserNotification(uid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    console.log(updateNotificationDto, id);
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Post('clear-notifications')
  markNotificationsAsRead(@Body() notificationIds: string[]) {
    return this.notificationService.markAsRead(notificationIds);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(+id);
  }
}
