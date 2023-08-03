import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdReviewsService } from './household-reviews.service';

describe('HouseholdReviewsService', () => {
  let service: HouseholdReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseholdReviewsService],
    }).compile();

    service = module.get<HouseholdReviewsService>(HouseholdReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
