import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema()
export class Chat {
  @Prop({
    type: [Types.ObjectId],
    ref: 'User',
    required: true,
    validate: (members: Types.ObjectId[]) => members.length >= 2,
    index: true,
  })
  members: Types.ObjectId[];

  @Prop({ type: Date, default: Date.now })
  lastMessageAt: Date;
}

export type ChatDocument = HydratedDocument<Chat>;
export const ChatSchema = SchemaFactory.createForClass(Chat);
