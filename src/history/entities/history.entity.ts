import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Phone } from 'src/phones/entities/phone.entity';
import { User } from 'src/users/entities/user.entity';

export type HistoryDocument = mongoose.HydratedDocument<History>;

@Schema({
  timestamps: true,
})
export class History extends BaseEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Phone' })
  phone_id: Phone;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  createdBy: User;
}

export const HistorySchema = SchemaFactory.createForClass(History);
