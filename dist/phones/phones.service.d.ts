/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreatePhoneDto } from './dto/create-phone.dto';
import { Phone } from './entities/phone.entity';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
export declare class PhonesService {
    private readonly phoneModel;
    constructor(phoneModel: Model<Phone>);
    create(createPhoneDto: CreatePhoneDto): Promise<import("mongoose").Document<unknown, {}, Phone> & Omit<Phone & Required<{
        _id: string;
    }>, never>>;
    findAll(pagination: PaginationQueryDto): Promise<{
        data: (import("mongoose").Document<unknown, {}, Phone> & Omit<Phone & Required<{
            _id: string;
        }>, never>)[];
        page: number;
        limit: number;
        totalPage: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Phone> & Omit<Phone & Required<{
        _id: string;
    }>, never>>;
    remove(id: string): string;
}
