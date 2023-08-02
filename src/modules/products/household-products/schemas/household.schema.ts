import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Size, SizeSchema } from 'src/modules/shared-schemas/size.schema';

@Schema()
export class Household {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  mainImage: string;

  @Prop({ type: [String] })
  images?: string[];

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  mainCategory: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  supCategory?: Types.ObjectId;

  @Prop({ type: Number, default: 1 })
  ratingsCount: number;

  @Prop({ type: Number, default: 0.0 })
  discount: number;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  vendor: Types.ObjectId;

  @Prop({ type: Number, default: 2.5 })
  rating: number;

  @Prop({ type: [SizeSchema], required: true })
  size: Size[];

  @Prop({ type: [String] })
  colors?: String[];

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Number, default: 0 })
  sold: number;
}

export const HouseholdSchema = SchemaFactory.createForClass(Household);
export type HouseholdDocument = HydratedDocument<Household>;
