import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { TokenTypeEnum } from '../enums/token-type.enum';

@Schema()
export class Token {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Date, required: true })
  expires: Date;

  @Prop({
    type: String,
    enum: Object.values(TokenTypeEnum),
    required: true,
  })
  type: TokenTypeEnum;
}

export type TokenDocument = HydratedDocument<Token>;
export const TokenSchema = SchemaFactory.createForClass(Token);
