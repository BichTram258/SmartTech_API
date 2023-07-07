import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity } from 'src/common/entities/base.entity';

export type PhoneDocument = mongoose.HydratedDocument<Phone>;

@Schema({
  timestamps: true,
})
export class Phone extends BaseEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  overview: any;

  @Prop({ type: Object })
  specification: any;

  @Prop({ type: Object })
  aspect_senti: any;

  @Prop({ type: Object })
  percent_senti: any;

  @Prop({ type: Object })
  count_month: any;

  @Prop({ type: Object })
  data: any;

  @Prop({ default: '0' })
  status: string;
}

export const PhoneSchema = SchemaFactory.createForClass(Phone);
