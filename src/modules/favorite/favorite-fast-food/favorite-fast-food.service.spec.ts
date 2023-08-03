import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteFastFoodService } from './favorite-fast-food.service';

describe('FavoriteFastFoodService', () => {
  let service: FavoriteFastFoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteFastFoodService],
    }).compile();

    service = module.get<FavoriteFastFoodService>(FavoriteFastFoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
