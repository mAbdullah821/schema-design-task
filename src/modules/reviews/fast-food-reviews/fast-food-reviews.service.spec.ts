import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodReviewsService } from './fast-food-reviews.service';

describe('FastFoodReviewsService', () => {
  let service: FastFoodReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FastFoodReviewsService],
    }).compile();

    service = module.get<FastFoodReviewsService>(FastFoodReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
