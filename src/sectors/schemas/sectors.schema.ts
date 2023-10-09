import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SectorsDocument = Sectors & Document;

@Schema()
export class Sectors {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date })
  deletedAt: Date | null;
}

export const SectorsSchema = SchemaFactory.createForClass(Sectors);
