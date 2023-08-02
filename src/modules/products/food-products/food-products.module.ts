import { Module } from '@nestjs/common';
import { FoodProductsService } from './food-products.service';
import { FoodProductsController } from './food-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, FoodSchema } from './schemas/food.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }]),
  ],
  controllers: [FoodProductsController],
  providers: [FoodProductsService],
})
export class FoodProductsModule {}
