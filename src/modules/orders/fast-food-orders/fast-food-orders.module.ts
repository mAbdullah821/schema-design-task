import { Module } from '@nestjs/common';
import { FastFoodOrdersService } from './fast-food-orders.service';
import { FastFoodOrdersController } from './fast-food-orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FastFoodOrder,
  FastFoodOrderSchema,
} from './schemas/fast-food-order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FastFoodOrder.name, schema: FastFoodOrderSchema },
    ]),
  ],
  controllers: [FastFoodOrdersController],
  providers: [FastFoodOrdersService],
})
export class FastFoodOrdersModule {}
