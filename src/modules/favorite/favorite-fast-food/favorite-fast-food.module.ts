import { Module } from '@nestjs/common';
import { FavoriteFastFoodService } from './favorite-fast-food.service';
import { FavoriteFastFoodController } from './favorite-fast-food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FavoriteFastFood,
  FavoriteFastFoodSchema,
} from './schemas/favorite-fast-food.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FavoriteFastFood.name, schema: FavoriteFastFoodSchema },
    ]),
  ],
  controllers: [FavoriteFastFoodController],
  providers: [FavoriteFastFoodService],
})
export class FavoriteFastFoodModule {}
