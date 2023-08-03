import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteHouseholdService } from './favorite-household.service';

describe('FavoriteHouseholdService', () => {
  let service: FavoriteHouseholdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteHouseholdService],
    }).compile();

    service = module.get<FavoriteHouseholdService>(FavoriteHouseholdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
