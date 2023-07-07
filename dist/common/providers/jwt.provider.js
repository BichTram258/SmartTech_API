"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJwtModuleAsyncOptions = exports.createJwtOptions = void 0;
const config_1 = require("@nestjs/config");
const createJwtOptions = async (configService) => {
    return {
        secret: configService.get('JWT_SECRET'),
        signOptions: {
            expiresIn: configService.get('JWT_EXPIRE'),
        },
    };
};
exports.createJwtOptions = createJwtOptions;
exports.createJwtModuleAsyncOptions = {
    inject: [config_1.ConfigService],
    useFactory: exports.createJwtOptions,
};
//# sourceMappingURL=jwt.provider.js.map