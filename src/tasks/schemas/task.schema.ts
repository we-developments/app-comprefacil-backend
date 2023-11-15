import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ChecklistItem extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  done: string;

  @Prop({ required: true })
  note: string;

  @Prop({ required: true, type: [String] })
  images: string[];

  @Prop({ required: true })
  imagesRequired: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  obsResponsavel: string;
}

@Schema({_id: false})
export class User extends Document  {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  uid: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  sector: string;
}

export const ChecklistItemSchema = SchemaFactory.createForClass(ChecklistItem);
export const UserItemSchema = SchemaFactory.createForClass(User);

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  finishDate: Date;

  @Prop({ required: true })
  taskDescription: string;

  @Prop({ required: true })
  taskName: string;

  @Prop({ type: [UserItemSchema], required: true })
  selectedUsers: User[];

  @Prop({ required: true, type: [ChecklistItemSchema] })
  checklist: ChecklistItem[];

  @Prop({
    required: true,
    type: {
      _id: { type: String, required: true },
      name: { type: String, required: true },
    }
  })
  selectedSector: {
    _id: string;
    name: string;
  };

  @Prop({ required: true })
  status: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
export type TaskDocument = Task & Document;
