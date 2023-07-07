"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const logger = new common_1.Logger(bootstrap.name);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    await app.listen(process.env.PORT, () => {
        logger.log(` ===> Application is running on PORT ${process.env.PORT} <=== `);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map