import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Item, ItemSchema } from './item.schema';

@Schema()
export class HomeServiceCart {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: [ItemSchema], required: true })
  products: Item[];

  @Prop({ type: Number, required: true })
  totalQuantity: number;

  @Prop({ type: Number, required: true })
  productsPrice: number;

  @Prop({ type: Number, default: 0 })
  taxPrice: number;

  @Prop({ type: Number, default: 0 })
  shippingPrice: number;
}

export type HomeServiceCartDocument = HydratedDocument<HomeServiceCart>;
export const HomeServiceCartSchema =
  SchemaFactory.createForClass(HomeServiceCart);
