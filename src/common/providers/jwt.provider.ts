import { ConfigService } from '@nestjs/config';

export const createJwtOptions = async (configService: ConfigService) => {
  return {
    secret: configService.get<string>('JWT_SECRET'),
    signOptions: {
      expiresIn: configService.get<string | number>('JWT_EXPIRE'),
    },
  };
};

export const createJwtModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: createJwtOptions,
};
