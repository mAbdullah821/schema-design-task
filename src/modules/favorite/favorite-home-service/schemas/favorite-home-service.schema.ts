import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class FavoriteHomeService {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'HomeService' })
  productId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  vendorId?: Types.ObjectId;
}

export type FavoriteHomeServiceDocument = HydratedDocument<FavoriteHomeService>;
export const FavoriteHomeServiceSchema =
  SchemaFactory.createForClass(FavoriteHomeService);
