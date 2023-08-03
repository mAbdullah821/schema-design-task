import { Module } from '@nestjs/common';
import { HouseholdReviewsService } from './household-reviews.service';
import { HouseholdReviewsController } from './household-reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HouseholdReview,
  HouseholdReviewSchema,
} from './schemas/household-review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HouseholdReview.name, schema: HouseholdReviewSchema },
    ]),
  ],
  controllers: [HouseholdReviewsController],
  providers: [HouseholdReviewsService],
})
export class HouseholdReviewsModule {}
