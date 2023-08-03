import { Module } from '@nestjs/common';
import { TransferMoneyService } from './transfer-money.service';
import { TransferMoneyController } from './transfer-money.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TransferMoney,
  TransferMoneySchema,
} from './schemas/transfer-money.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TransferMoney.name, schema: TransferMoneySchema },
    ]),
  ],
  controllers: [TransferMoneyController],
  providers: [TransferMoneyService],
})
export class TransferMoneyModule {}
