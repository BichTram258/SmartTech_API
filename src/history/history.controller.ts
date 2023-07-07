import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';
import { Request } from 'express';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create(@Req() req: Request, @Body() createHistoryDto: CreateHistoryDto) {
    const userId = req['userId'];
    return this.historyService.create(userId, createHistoryDto);
  }

  @Get('me')
  findHistoryById(@Req() req: Request) {
    const userId = req['userId'];
    return this.historyService.findHistory(userId);
  }

  @Get()
  findAll() {
    return this.historyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyService.remove(id);
  }
}
