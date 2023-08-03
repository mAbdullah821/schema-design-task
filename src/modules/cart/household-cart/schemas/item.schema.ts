import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ _id: false })
export class Item {
  @Prop({ type: Types.ObjectId, ref: 'Household', required: true })
  productId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Number })
  pricePerUnit?: number;

  @Prop({ type: Number })
  totalPrice?: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
