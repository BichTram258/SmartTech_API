import * as mongoose from 'mongoose';
import { BaseEntity } from 'src/common/entities/base.entity';
export type PhoneDocument = mongoose.HydratedDocument<Phone>;
export declare class Phone extends BaseEntity {
    name: string;
    overview: any;
    specification: any;
    aspect_senti: any;
    percent_senti: any;
    count_month: any;
    data: any;
}
export declare const PhoneSchema: mongoose.Schema<Phone, mongoose.Model<Phone, any, any, any, mongoose.Document<unknown, any, Phone> & Omit<Phone & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Phone, mongoose.Document<unknown, {}, mongoose.FlatRecord<Phone>> & Omit<mongoose.FlatRecord<Phone> & Required<{
    _id: string;
}>, never>>;
