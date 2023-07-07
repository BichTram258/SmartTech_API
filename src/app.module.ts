import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoryModule } from './history/history.module';
import { CommonExceptionsMiddleware } from './common/middlewares/common-exceptions.middleware';
import { AuthModule } from './auth/auth.module';
import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UsersModule,
    HistoryModule,
    AuthModule,
    PhonesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CommonExceptionsMiddleware).forRoutes('*');
  }
}
