import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class FavoriteFastFood {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'FastFood' })
  productId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  vendorId?: Types.ObjectId;
}

export type FavoriteFastFoodDocument = HydratedDocument<FavoriteFastFood>;
export const FavoriteFastFoodSchema =
  SchemaFactory.createForClass(FavoriteFastFood);
