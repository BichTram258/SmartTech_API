import { ConfigService } from '@nestjs/config';
export declare const createJwtOptions: (configService: ConfigService) => Promise<{
    secret: string;
    signOptions: {
        expiresIn: string | number;
    };
}>;
export declare const createJwtModuleAsyncOptions: {
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => Promise<{
        secret: string;
        signOptions: {
            expiresIn: string | number;
        };
    }>;
};
