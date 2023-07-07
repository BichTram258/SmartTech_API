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
exports.PhonesService = void 0;
const common_1 = require("@nestjs/common");
const phone_entity_1 = require("./entities/phone.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PhonesService = exports.PhonesService = class PhonesService {
    constructor(phoneModel) {
        this.phoneModel = phoneModel;
    }
    async create(createPhoneDto) {
        const findPhone = await this.phoneModel.findOne({
            name: createPhoneDto.name,
        });
        if (findPhone) {
            return this.findOne(findPhone._id);
        }
        const newPhone = await this.phoneModel.create({
            name: createPhoneDto.name,
        });
        return this.findOne(newPhone._id);
    }
    async findAll(pagination) {
        const { page = 1, limit = 10, name = '' } = pagination;
        const filter = {};
        if (name) {
            filter['name'] = new RegExp(name, 'i');
        }
        const countPromise = this.phoneModel.countDocuments(filter);
        const dataPromise = this.phoneModel
            .find(filter)
            .sort({ _id: 1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
        const [count, data] = await Promise.all([countPromise, dataPromise]);
        const totalPage = Math.ceil(count / limit);
        return {
            data,
            page,
            limit,
            totalPage,
        };
    }
    async findOne(id) {
        return await this.phoneModel.findById(id);
    }
    remove(id) {
        return `This action removes a #${id} phone`;
    }
};
exports.PhonesService = PhonesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(phone_entity_1.Phone.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PhonesService);
//# sourceMappingURL=phones.service.js.map