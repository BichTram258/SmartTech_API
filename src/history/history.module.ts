import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { History, HistorySchema } from './entities/history.entity';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { AccessTokenMiddleware } from 'src/common/middlewares/access-token.middleware';
import { PhonesModule } from 'src/phones/phones.module';

@Module({
  imports: [
    PhonesModule,
    MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }]),
  ],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AccessTokenMiddleware).forRoutes(HistoryController);
  }
}
