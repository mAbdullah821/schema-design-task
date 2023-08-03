import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class FavoriteHousehold {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Household' })
  productId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  vendorId?: Types.ObjectId;
}

export type FavoriteHouseholdDocument = HydratedDocument<FavoriteHousehold>;
export const FavoriteHouseholdSchema =
  SchemaFactory.createForClass(FavoriteHousehold);
