"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesController = void 0;
const common_1 = require("@nestjs/common");
const pagination_query_dto_1 = require("../common/dto/pagination-query.dto");
const create_phone_dto_1 = require("./dto/create-phone.dto");
const phones_service_1 = require("./phones.service");
let PhonesController = exports.PhonesController = class PhonesController {
    constructor(phonesService) {
        this.phonesService = phonesService;
    }
    create(createPhoneDto) {
        return this.phonesService.create(createPhoneDto);
    }
    async findAll(pagination) {
        return await this.phonesService.findAll(pagination);
    }
    findOne(id) {
        return this.phonesService.findOne(id);
    }
    remove(id) {
        return this.phonesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phone_dto_1.CreatePhoneDto]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_query_dto_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], PhonesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "remove", null);
exports.PhonesController = PhonesController = __decorate([
    (0, common_1.Controller)('phones'),
    __metadata("design:paramtypes", [phones_service_1.PhonesService])
], PhonesController);
//# sourceMappingURL=phones.controller.js.map