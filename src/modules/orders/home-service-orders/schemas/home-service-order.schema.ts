import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ServiceStatusEnum } from '../enums/service-status.enum';
import { PaymentMethodEnum } from 'src/modules/shared-enums/payment-method.enum';
import {
  Address,
  AddressSchema,
} from 'src/modules/shared-schemas/address.schema';

@Schema({ timestamps: true })
export class HomeServiceOrder {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'User', required: true })
  workers: Types.ObjectId[];

  @Prop({ type: Number })
  totalPrice?: number;

  @Prop({
    type: String,
    enum: Object.values(ServiceStatusEnum),
    default: ServiceStatusEnum.Pending,
  })
  status: ServiceStatusEnum;

  @Prop({ type: Boolean, default: false })
  isDone: boolean;

  @Prop({ type: Boolean, default: false })
  isArrived: boolean;

  @Prop({ type: Date })
  arrivedAt?: Date;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: AddressSchema, required: true })
  address: Address;

  @Prop({ type: Date, required: true })
  serviceTime: Date;
}

export type HomeServiceOrderDocument = HydratedDocument<HomeServiceOrder>;
export const HomeServiceOrderSchema =
  SchemaFactory.createForClass(HomeServiceOrder);
