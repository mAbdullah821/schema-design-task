import { Module } from '@nestjs/common';
import { FoodOrdersService } from './food-orders.service';
import { FoodOrdersController } from './food-orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodOrder, FoodOrderSchema } from './schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FoodOrder.name, schema: FoodOrderSchema },
    ]),
  ],
  controllers: [FoodOrdersController],
  providers: [FoodOrdersService],
})
export class FoodOrdersModule {}
