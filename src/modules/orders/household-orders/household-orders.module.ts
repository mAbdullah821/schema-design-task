import { Module } from '@nestjs/common';
import { HouseholdOrdersService } from './household-orders.service';
import { HouseholdOrdersController } from './household-orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HouseholdOrder,
  HouseholdOrderSchema,
} from './schemas/household-order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HouseholdOrder.name, schema: HouseholdOrderSchema },
    ]),
  ],
  controllers: [HouseholdOrdersController],
  providers: [HouseholdOrdersService],
})
export class HouseholdOrdersModule {}
