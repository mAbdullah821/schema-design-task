import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceReviewsController } from './home-service-reviews.controller';
import { HomeServiceReviewsService } from './home-service-reviews.service';

describe('HomeServiceReviewsController', () => {
  let controller: HomeServiceReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeServiceReviewsController],
      providers: [HomeServiceReviewsService],
    }).compile();

    controller = module.get<HomeServiceReviewsController>(HomeServiceReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
