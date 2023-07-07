import * as mongoose from 'mongoose';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Phone } from 'src/phones/entities/phone.entity';
import { User } from 'src/users/entities/user.entity';
export type HistoryDocument = mongoose.HydratedDocument<History>;
export declare class History extends BaseEntity {
    name: string;
    phone_id: Phone;
    createdBy: User;
}
export declare const HistorySchema: mongoose.Schema<History, mongoose.Model<History, any, any, any, mongoose.Document<unknown, any, History> & Omit<History & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, History, mongoose.Document<unknown, {}, mongoose.FlatRecord<History>> & Omit<mongoose.FlatRecord<History> & Required<{
    _id: string;
}>, never>>;
