import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hashPassword } from '@/helpers/password';

@Injectable()
export class UsersService {
  // https://docs.nestjs.com/techniques/mongodb#model-injection
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const hashedPassword = await hashPassword(password);
    const user = new this.userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await user.save();

    return {
      _id: user._id,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
