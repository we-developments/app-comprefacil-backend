import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as firebase from 'firebase-admin';
import { CreateUserFirebaseDto } from './dto/createUserFirebase.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findByUid(uid: string): Promise<User | null> {
    return this.userModel.findOne({ uid }).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel
      .find({ email: { $ne: 'aplicativocomprefacil@gmail.com' } })
      .exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: any): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id, {});
  }

  async createUserFirebaseAuth(data: CreateUserFirebaseDto) {
    return firebase
      .auth()
      .createUser({
        email: data.email,
        password: `${
          data.email.split('@')[0]
        }@comprefacil${new Date().getFullYear()}`,
      })
      .then(async (response) => {
        return await this.create({ ...data, uid: response.uid })
          .then((res) => res)
          .catch((err) => err);
      })
      .catch((err) => err);
  }

  async deleteUserFirebaseAuth(userData) {
    return firebase
      .auth()
      .deleteUser(userData.uid)
      .then(() => {
        return this.delete(userData.id)
          .then((res) => res)
          .catch((err) => err);
      })
      .catch((err) => err);
  }
}
