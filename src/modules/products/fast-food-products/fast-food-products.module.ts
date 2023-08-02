import { Module } from '@nestjs/common';
import { FastFoodProductsService } from './fast-food-products.service';
import { FastFoodProductsController } from './fast-food-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FastFood, FastFoodSchema } from './schemas/fast-food.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FastFood.name, schema: FastFoodSchema },
    ]),
  ],
  controllers: [FastFoodProductsController],
  providers: [FastFoodProductsService],
})
export class FastFoodProductsModule {}
