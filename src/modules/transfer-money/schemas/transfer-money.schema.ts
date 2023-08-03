import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { TransferMoneyStatus } from '../enums/transfer-money-status.enum';

@Schema({ timestamps: true })
export class TransferMoney {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  from: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  to: Types.ObjectId;

  @Prop({ type: Number, required: true, min: 25 })
  amount: number;

  @Prop({
    type: String,
    enum: Object.values(TransferMoneyStatus),
    default: TransferMoneyStatus.Pending,
  })
  status: TransferMoneyStatus;
}

export type TransferMoneyDocument = HydratedDocument<TransferMoney>;
export const TransferMoneySchema = SchemaFactory.createForClass(TransferMoney);
