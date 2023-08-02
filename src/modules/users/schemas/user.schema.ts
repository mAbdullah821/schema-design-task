import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleTypeEnum } from '../enums/role-type.enum';
import { Address, AddressSchema } from './address.schema';
import { PaymentMethodEnum } from '../enums/payment-method.enum';
import { HydratedDocument, Types } from 'mongoose';

@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: Boolean, default: false })
  isEmailVerified: boolean;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Date })
  criticalChangeAt?: Date;

  @Prop({ type: String, required: true, enum: Object.values(RoleTypeEnum) })
  role: RoleTypeEnum;

  @Prop({ type: AddressSchema })
  address?: Address;

  @Prop({ type: String })
  phone?: string;

  @Prop({ type: String })
  website?: string;

  @Prop({ type: String })
  company?: string;

  @Prop({ type: String })
  bio?: string;

  @Prop({ type: String })
  avatar: string;

  @Prop({
    type: String,
    enum: Object.values(PaymentMethodEnum),
    default: 'InternalWallet',
  })
  paymentMethod: PaymentMethodEnum;

  @Prop({ Type: Number, default: 0 })
  walletBalance: number;

  @Prop({ type: [Types.ObjectId], ref: 'Category' })
  services?: Types.ObjectId[];
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
