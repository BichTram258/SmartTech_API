import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Phone, PhoneSchema } from './entities/phone.entity';
import { AccessTokenMiddleware } from 'src/common/middlewares/access-token.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Phone.name, schema: PhoneSchema }]),
  ],
  controllers: [PhonesController],
  providers: [PhonesService],
  exports: [PhonesService],
})
export class PhonesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AccessTokenMiddleware).forRoutes(PhonesController);
  }
}
