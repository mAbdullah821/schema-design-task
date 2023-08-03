import { Module } from '@nestjs/common';
import { FavoriteFoodService } from './favorite-food.service';
import { FavoriteFoodController } from './favorite-food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FavoriteFood,
  FavoriteFoodSchema,
} from './schemas/favorite-food.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FavoriteFood.name, schema: FavoriteFoodSchema },
    ]),
  ],
  controllers: [FavoriteFoodController],
  providers: [FavoriteFoodService],
})
export class FavoriteFoodModule {}
