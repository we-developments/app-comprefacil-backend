import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now })
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  responsibleUser: Types.ObjectId;

  @Prop({ enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' })
  status: string;

  @Prop()
  proofImages: string[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);