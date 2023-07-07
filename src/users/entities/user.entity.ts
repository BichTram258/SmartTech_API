import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/common/entities/base.entity';

export type UserDocument = HydratedDocument<User>;

export enum ROLE {
  Admin = 'Admin',
  User = 'User',
}

@Schema({
  timestamps: true,
})
export class User extends BaseEntity {
  @Prop({
    required: true,
    minlength: 2,
    maxlength: 32,
    set: (name: string) => {
      return name.trim();
    },
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  })
  email: string;

  @Prop({
    required: true,
    minlength: 6,
    maxlength: 64,
    set: (password: string) => {
      return password.trim();
    },
  })
  password: string;

  @Prop({ enum: ROLE, default: 'User' })
  role: string;

  @Prop({ default: false })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
