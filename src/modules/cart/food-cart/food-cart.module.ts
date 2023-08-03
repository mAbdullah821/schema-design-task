import { Module } from '@nestjs/common';
import { FoodCartService } from './food-cart.service';
import { FoodCartController } from './food-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodCart, FoodCartSchema } from './schemas/food-cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FoodCart.name, schema: FoodCartSchema },
    ]),
  ],
  controllers: [FoodCartController],
  providers: [FoodCartService],
})
export class FoodCartModule {}
