import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class FavoritePharmacy {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Pharmacy' })
  productId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  vendorId?: Types.ObjectId;
}

export type FavoritePharmacyDocument = HydratedDocument<FavoritePharmacy>;
export const FavoritePharmacySchema =
  SchemaFactory.createForClass(FavoritePharmacy);
