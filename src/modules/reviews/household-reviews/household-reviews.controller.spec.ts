import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdReviewsController } from './household-reviews.controller';
import { HouseholdReviewsService } from './household-reviews.service';

describe('HouseholdReviewsController', () => {
  let controller: HouseholdReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseholdReviewsController],
      providers: [HouseholdReviewsService],
    }).compile();

    controller = module.get<HouseholdReviewsController>(HouseholdReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
