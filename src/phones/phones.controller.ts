import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { PhonesService } from './phones.service';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phonesService.create(createPhoneDto);
  }

  @Get()
  async findAll(@Query() pagination: PaginationQueryDto) {
    return await this.phonesService.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonesService.remove(id);
  }
}
