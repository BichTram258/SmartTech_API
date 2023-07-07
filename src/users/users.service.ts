import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUser: SignUpDto): Promise<User> {
    return await this.userModel.create(createUser);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).select('-password');
  }

  async findByCondition(condition = {}): Promise<User> {
    const user = await this.userModel
      .findOne({
        ...condition,
        deletedAt: null,
      })
      .exec();
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndRemove(id);
  }
}
