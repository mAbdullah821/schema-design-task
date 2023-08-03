import { Test, TestingModule } from '@nestjs/testing';
import { FoodReviewsController } from './food-reviews.controller';
import { FoodReviewsService } from './food-reviews.service';

describe('FoodReviewsController', () => {
  let controller: FoodReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodReviewsController],
      providers: [FoodReviewsService],
    }).compile();

    controller = module.get<FoodReviewsController>(FoodReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
