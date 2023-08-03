import { Module } from '@nestjs/common';
import { FoodReviewsService } from './food-reviews.service';
import { FoodReviewsController } from './food-reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodReview, FoodReviewSchema } from './schemas/food-review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FoodReview.name, schema: FoodReviewSchema },
    ]),
  ],
  controllers: [FoodReviewsController],
  providers: [FoodReviewsService],
})
export class FoodReviewsModule {}
