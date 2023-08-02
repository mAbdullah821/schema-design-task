import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Coordinate, CoordinateSchema } from './coordinate.schema';

@Schema({ _id: false })
export class Address {
  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  addressDetails: string;

  @Prop({ type: String })
  additionalInfo?: string;

  @Prop({ type: CoordinateSchema })
  location?: Coordinate;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
