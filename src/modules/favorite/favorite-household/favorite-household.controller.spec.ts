import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteHouseholdController } from './favorite-household.controller';
import { FavoriteHouseholdService } from './favorite-household.service';

describe('FavoriteHouseholdController', () => {
  let controller: FavoriteHouseholdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteHouseholdController],
      providers: [FavoriteHouseholdService],
    }).compile();

    controller = module.get<FavoriteHouseholdController>(FavoriteHouseholdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
