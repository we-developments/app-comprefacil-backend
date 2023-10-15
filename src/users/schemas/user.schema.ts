import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  uid: string;

  @Prop({ required: true })
  sector: string;

  @Prop({ required: true })
  jobTitle: string;

  @Prop()
  isAdmin: boolean;

  @Prop({ required: true })
  age: number;

  @Prop()
  isActive: boolean;

  @Prop()
  profilePicture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
