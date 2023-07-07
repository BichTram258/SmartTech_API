import { Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { Phone } from './entities/phone.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class PhonesService {
  constructor(
    @InjectModel(Phone.name) private readonly phoneModel: Model<Phone>,
  ) {}

  async create(createPhoneDto: CreatePhoneDto) {
    const findPhone = await this.phoneModel.findOne({
      name: createPhoneDto.name,
    });

    if (findPhone) {
      return this.findOne(findPhone._id);
    }

    const newPhone = await this.phoneModel.create({
      name: createPhoneDto.name,
    });

    return this.findOne(newPhone._id);
  }

  async findAll(pagination: PaginationQueryDto) {
    const { page = 1, limit = 10, name = '' } = pagination;

    const filter: any = {};

    if (name) {
      filter['name'] = new RegExp(name, 'i');
    }

    const countPromise = this.phoneModel.countDocuments(filter);

    const dataPromise = this.phoneModel
      .find(filter)
      .sort({ _id: 1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const [count, data] = await Promise.all([countPromise, dataPromise]);
    const totalPage = Math.ceil(count / limit);

    return {
      data,
      page,
      limit,
      totalPage,
    };
  }

  async findOne(id: string) {
    return await this.phoneModel.findById(id);
  }

  remove(id: string) {
    return `This action removes a #${id} phone`;
  }
}
