"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesModule = void 0;
const common_1 = require("@nestjs/common");
const phones_service_1 = require("./phones.service");
const phones_controller_1 = require("./phones.controller");
const mongoose_1 = require("@nestjs/mongoose");
const phone_entity_1 = require("./entities/phone.entity");
const access_token_middleware_1 = require("../common/middlewares/access-token.middleware");
let PhonesModule = exports.PhonesModule = class PhonesModule {
    configure(consumer) {
        consumer.apply(access_token_middleware_1.AccessTokenMiddleware).forRoutes(phones_controller_1.PhonesController);
    }
};
exports.PhonesModule = PhonesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: phone_entity_1.Phone.name, schema: phone_entity_1.PhoneSchema }]),
        ],
        controllers: [phones_controller_1.PhonesController],
        providers: [phones_service_1.PhonesService],
        exports: [phones_service_1.PhonesService],
    })
], PhonesModule);
//# sourceMappingURL=phones.module.js.map