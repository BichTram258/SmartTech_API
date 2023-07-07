import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHistoryDto } from './dto/create-history.dto';
import { History } from './entities/history.entity';
import { PhonesService } from 'src/phones/phones.service';

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(History.name) private readonly historyModel: Model<History>,
    private readonly phoneService: PhonesService,
  ) {}

  async create(userId: string, createHistoryDto: CreateHistoryDto) {
    const findPhone = await this.phoneService.create({
      name: createHistoryDto.name,
    });

    const newPhone = await this.historyModel.create({
      name: createHistoryDto.name,
      phone_id: findPhone._id,
      createdBy: userId,
    });
    return await this.findOne(newPhone._id);
  }

  async findHistory(userId: string) {
    const history = await this.historyModel
      .find({
        createdBy: userId,
      })
      .select('-deletedAt -createdBy -createdAt -updatedAt -__v');
    return history;
  }

  findAll() {
    return `This action returns all history`;
  }

  async findOne(id: string) {
    return await this.historyModel
      .findById(id)
      .select('name createdBy phone_id')
      .populate({
        path: 'createdBy',
        select: '_id name username email phone role isActive ',
      })
      .populate({ path: 'phone_id' });
  }

  remove(id: string) {
    return `This action removes a #${id} history`;
  }
}
