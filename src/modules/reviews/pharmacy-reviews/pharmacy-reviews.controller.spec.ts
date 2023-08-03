import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyReviewsController } from './pharmacy-reviews.controller';
import { PharmacyReviewsService } from './pharmacy-reviews.service';

describe('PharmacyReviewsController', () => {
  let controller: PharmacyReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacyReviewsController],
      providers: [PharmacyReviewsService],
    }).compile();

    controller = module.get<PharmacyReviewsController>(PharmacyReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
