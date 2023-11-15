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

  @Prop({ required: true })
  obsResponsavel: string;
}

export const ChecklistItemSchema = SchemaFactory.createForClass(ChecklistItem);

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  finishDate: Date;

  @Prop({ required: true })
  taskDescription: string;

  @Prop({ required: true })
  taskName: string;

  @Prop({ required: true, type: [String] })
  selectedUsers: string[];

  @Prop({ required: true, type: [ChecklistItemSchema] })
  checklist: ChecklistItem[];

  @Prop({
    required: true,
    type: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      online: { type: Boolean, required: true }
    }
  })
  selectedSector: {
    id: number;
    name: string;
    online: boolean;
  };

  @Prop({ required: true })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
export type TaskDocument = Task & Document;
