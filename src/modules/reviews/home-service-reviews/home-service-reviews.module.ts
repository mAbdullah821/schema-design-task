import { Module } from '@nestjs/common';
import { HomeServiceReviewsService } from './home-service-reviews.service';
import { HomeServiceReviewsController } from './home-service-reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HomeServiceReview,
  HomeServiceReviewSchema,
} from './schemas/home-service-review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HomeServiceReview.name, schema: HomeServiceReviewSchema },
    ]),
  ],
  controllers: [HomeServiceReviewsController],
  providers: [HomeServiceReviewsService],
})
export class HomeServiceReviewsModule {}
