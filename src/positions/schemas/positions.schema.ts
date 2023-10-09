import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PositionsDocument = Positions & Document;

@Schema()
export class Positions {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date })
  deletedAt: Date | null;
}

export const PositionsSchema = SchemaFactory.createForClass(Positions);
