import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PointEnum } from '../enums/point.enum';

@Schema({ _id: false })
export class Coordinate {
  @Prop({ type: String, enum: Object.values(PointEnum), required: true })
  type: PointEnum;

  @Prop({ type: [Number], required: true })
  coordinates: number[];
}

export const CoordinateSchema = SchemaFactory.createForClass(Coordinate);
