import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyReviewsService } from './pharmacy-reviews.service';

describe('PharmacyReviewsService', () => {
  let service: PharmacyReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacyReviewsService],
    }).compile();

    service = module.get<PharmacyReviewsService>(PharmacyReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
