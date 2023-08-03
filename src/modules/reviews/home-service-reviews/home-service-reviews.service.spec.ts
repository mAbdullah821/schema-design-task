import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceReviewsService } from './home-service-reviews.service';

describe('HomeServiceReviewsService', () => {
  let service: HomeServiceReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeServiceReviewsService],
    }).compile();

    service = module.get<HomeServiceReviewsService>(HomeServiceReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
