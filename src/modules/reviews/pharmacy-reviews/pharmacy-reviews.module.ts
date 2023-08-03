import { Module } from '@nestjs/common';
import { PharmacyReviewsService } from './pharmacy-reviews.service';
import { PharmacyReviewsController } from './pharmacy-reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PharmacyReview,
  PharmacyReviewSchema,
} from './schemas/pharmacy-review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PharmacyReview.name, schema: PharmacyReviewSchema },
    ]),
  ],
  controllers: [PharmacyReviewsController],
  providers: [PharmacyReviewsService],
})
export class PharmacyReviewsModule {}
