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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';
import { Request } from 'express';
export declare class HistoryController {
    private readonly historyService;
    constructor(historyService: HistoryService);
    create(req: Request, createHistoryDto: CreateHistoryDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/history.entity").History> & Omit<import("./entities/history.entity").History & Required<{
        _id: string;
    }>, never>>;
    findHistoryById(req: Request): Promise<(import("mongoose").Document<unknown, {}, import("./entities/history.entity").History> & Omit<import("./entities/history.entity").History & Required<{
        _id: string;
    }>, never>)[]>;
    findAll(): string;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/history.entity").History> & Omit<import("./entities/history.entity").History & Required<{
        _id: string;
    }>, never>>;
    remove(id: string): string;
}
