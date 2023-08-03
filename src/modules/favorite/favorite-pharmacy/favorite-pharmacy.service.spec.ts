import { Test, TestingModule } from '@nestjs/testing';
import { FavoritePharmacyService } from './favorite-pharmacy.service';

describe('FavoritePharmacyService', () => {
  let service: FavoritePharmacyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritePharmacyService],
    }).compile();

    service = module.get<FavoritePharmacyService>(FavoritePharmacyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
