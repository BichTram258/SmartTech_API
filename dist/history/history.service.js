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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const history_entity_1 = require("./entities/history.entity");
const phones_service_1 = require("../phones/phones.service");
let HistoryService = exports.HistoryService = class HistoryService {
    constructor(historyModel, phoneService) {
        this.historyModel = historyModel;
        this.phoneService = phoneService;
    }
    async create(userId, createHistoryDto) {
        const findPhone = await this.phoneService.create({
            name: createHistoryDto.name,
        });
        const newPhone = await this.historyModel.create({
            name: createHistoryDto.name,
            phone_id: findPhone._id,
            createdBy: userId,
        });
        return this.findOne(newPhone._id);
    }
    async findHistory(userId) {
        const history = await this.historyModel
            .find({
            createdBy: userId,
        })
            .select('-deletedAt -createdBy -createdAt -updatedAt -__v');
        return history;
    }
    findAll() {
        return `This action returns all history`;
    }
    async findOne(id) {
        return await this.historyModel
            .findById(id)
            .select('name createdBy phone_id')
            .populate({
            path: 'createdBy',
            select: '_id name username email phone role isActive ',
        })
            .populate({ path: 'phone_id' });
    }
    remove(id) {
        return `This action removes a #${id} history`;
    }
};
exports.HistoryService = HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(history_entity_1.History.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        phones_service_1.PhonesService])
], HistoryService);
//# sourceMappingURL=history.service.js.map