import { Test, TestingModule } from '@nestjs/testing';
import { FoodReviewsService } from './food-reviews.service';

describe('FoodReviewsService', () => {
  let service: FoodReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodReviewsService],
    }).compile();

    service = module.get<FoodReviewsService>(FoodReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
