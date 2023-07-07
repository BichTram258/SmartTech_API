"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const history_entity_1 = require("./entities/history.entity");
const history_controller_1 = require("./history.controller");
const history_service_1 = require("./history.service");
const access_token_middleware_1 = require("../common/middlewares/access-token.middleware");
const phones_module_1 = require("../phones/phones.module");
let HistoryModule = exports.HistoryModule = class HistoryModule {
    configure(consumer) {
        consumer.apply(access_token_middleware_1.AccessTokenMiddleware).forRoutes(history_controller_1.HistoryController);
    }
};
exports.HistoryModule = HistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            phones_module_1.PhonesModule,
            mongoose_1.MongooseModule.forFeature([{ name: history_entity_1.History.name, schema: history_entity_1.HistorySchema }]),
        ],
        controllers: [history_controller_1.HistoryController],
        providers: [history_service_1.HistoryService],
    })
], HistoryModule);
//# sourceMappingURL=history.module.js.map