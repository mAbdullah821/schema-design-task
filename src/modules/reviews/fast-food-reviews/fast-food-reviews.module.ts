import { Module } from '@nestjs/common';
import { FastFoodReviewsService } from './fast-food-reviews.service';
import { FastFoodReviewsController } from './fast-food-reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FastFoodReview,
  FastFoodReviewSchema,
} from './schemas/fast-food-review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FastFoodReview.name, schema: FastFoodReviewSchema },
    ]),
  ],
  controllers: [FastFoodReviewsController],
  providers: [FastFoodReviewsService],
})
export class FastFoodReviewsModule {}
