import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class FavoriteFood {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Food' })
  productId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  vendorId?: Types.ObjectId;
}

export type FavoriteFoodDocument = HydratedDocument<FavoriteFood>;
export const FavoriteFoodSchema = SchemaFactory.createForClass(FavoriteFood);
