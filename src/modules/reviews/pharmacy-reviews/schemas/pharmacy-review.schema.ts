import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class PharmacyReview {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Pharmacy', required: true })
  productId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  message: string;
}

export type PharmacyReviewDocument = HydratedDocument<PharmacyReview>;
export const PharmacyReviewSchema =
  SchemaFactory.createForClass(PharmacyReview);
