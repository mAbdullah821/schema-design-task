import { Test, TestingModule } from '@nestjs/testing';
import { FavoritePharmacyController } from './favorite-pharmacy.controller';
import { FavoritePharmacyService } from './favorite-pharmacy.service';

describe('FavoritePharmacyController', () => {
  let controller: FavoritePharmacyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritePharmacyController],
      providers: [FavoritePharmacyService],
    }).compile();

    controller = module.get<FavoritePharmacyController>(FavoritePharmacyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
