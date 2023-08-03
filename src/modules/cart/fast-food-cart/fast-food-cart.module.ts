import { Module } from '@nestjs/common';
import { FastFoodCartService } from './fast-food-cart.service';
import { FastFoodCartController } from './fast-food-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FastFoodCart,
  FastFoodCartSchema,
} from './schemas/fast-food-cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FastFoodCart.name, schema: FastFoodCartSchema },
    ]),
  ],
  controllers: [FastFoodCartController],
  providers: [FastFoodCartService],
})
export class FastFoodCartModule {}
