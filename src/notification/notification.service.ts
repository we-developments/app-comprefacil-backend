import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import {
  Notifications,
  NotificationsDocument,
} from './schemas/notification.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notifications.name)
    private notificationModel: Model<NotificationsDocument>,
  ) {}

  create(createNotificationDto: CreateNotificationDto) {
    const createNotification = new this.notificationModel(
      createNotificationDto,
    );
    return createNotification.save();
  }

  findAll() {
    return this.notificationModel.find().exec();
  }

  async findAllByUserNotification(uid: string) {
    return this.notificationModel
      .find({
        $and: [{ usersReceiveNotification: { $in: [uid] } }],
      })
      .sort({ createdAt: -1 });
  }

  findOne(id: number) {
    return this.notificationModel.findById(id).exec();
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto) {
    return this.notificationModel.findByIdAndUpdate(id, updateNotificationDto, {
      new: true,
    });
  }

  async markAsRead(notificationIds: string[]) {
    const objectIds = notificationIds
      .map((id) => {
        try {
          return new mongoose.Types.ObjectId(id);
        } catch (error) {
          console.error(`ID inválido: ${id}`);
          return null;
        }
      })
      .filter((id) => id !== null);

    if (objectIds.length === 0) {
      throw new Error('Nenhum ID de notificação válido fornecido.');
    }

    return this.notificationModel.updateMany(
      { _id: { $in: objectIds }, wasReadNotification: false },
      { wasReadNotification: true },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
