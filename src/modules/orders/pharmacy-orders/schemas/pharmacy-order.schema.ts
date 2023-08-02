import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Item, ItemSchema } from './item.schema';
import { OrderStatusEnum } from 'src/modules/shared-enums/order-status.enum';
import { PaymentMethodEnum } from 'src/modules/shared-enums/payment-method.enum';
import {
  Address,
  AddressSchema,
} from 'src/modules/shared-schemas/address.schema';

@Schema({ timestamps: true })
export class PharmacyOrder {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: [ItemSchema], required: true })
  products: Item[];

  @Prop({ type: Number, required: true })
  productsPrice: number;

  @Prop({ type: Number, required: true })
  totalQuantity: number;

  @Prop({
    type: String,
    enum: Object.values(OrderStatusEnum),
    default: OrderStatusEnum.NotProcessed,
  })
  status: OrderStatusEnum;

  @Prop({ type: Boolean, default: false })
  isPaid: boolean;

  @Prop({ type: Boolean, default: false })
  isDelivered: boolean;

  @Prop({ type: Date })
  deliveredAt?: Date;

  @Prop({
    type: String,
    enum: Object.values(PaymentMethodEnum),
    required: true,
  })
  paymentMethod: PaymentMethodEnum;

  @Prop({ type: Number, default: 0 })
  taxPrice: number;

  @Prop({ type: Number, default: 0 })
  shippingPrice: number;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: AddressSchema, required: true })
  address: Address;

  @Prop({ type: Number, required: true })
  estimatedDeliveryTime: number;
}

export type PharmacyOrderDocument = HydratedDocument<PharmacyOrder>;
export const PharmacyOrderSchema = SchemaFactory.createForClass(PharmacyOrder);
