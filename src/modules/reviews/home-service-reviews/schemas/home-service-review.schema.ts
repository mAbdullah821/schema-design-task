import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class HomeServiceReview {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'HomeService', required: true })
  productId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  message: string;
}

export type HomeServiceReviewDocument = HydratedDocument<HomeServiceReview>;
export const HomeServiceReviewSchema =
  SchemaFactory.createForClass(HomeServiceReview);
