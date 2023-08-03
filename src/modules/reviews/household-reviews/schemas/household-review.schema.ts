import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class HouseholdReview {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Household', required: true })
  productId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  message: string;
}

export type HouseholdReviewDocument = HydratedDocument<HouseholdReview>;
export const HouseholdReviewSchema =
  SchemaFactory.createForClass(HouseholdReview);
