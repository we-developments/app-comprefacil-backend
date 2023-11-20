import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationsDocument = Notifications & Document;

@Schema()
export class Notifications {
  @Prop({ required: true })
  userSendNotification: string;

  @Prop()
  usersReceiveNotification: string[];

  @Prop({ default: false })
  wasReadNotification: boolean;

  @Prop({ required: true })
  messageNotification: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date })
  deletedAt: Date | null;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
