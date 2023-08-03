import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class FastFoodReview {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'FastFood', required: true })
  productId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  message: string;
}

export type FastFoodReviewDocument = HydratedDocument<FastFoodReview>;
export const FastFoodReviewSchema =
  SchemaFactory.createForClass(FastFoodReview);
