import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodReviewsController } from './fast-food-reviews.controller';
import { FastFoodReviewsService } from './fast-food-reviews.service';

describe('FastFoodReviewsController', () => {
  let controller: FastFoodReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FastFoodReviewsController],
      providers: [FastFoodReviewsService],
    }).compile();

    controller = module.get<FastFoodReviewsController>(FastFoodReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
