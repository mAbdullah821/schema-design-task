import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteFastFoodController } from './favorite-fast-food.controller';
import { FavoriteFastFoodService } from './favorite-fast-food.service';

describe('FavoriteFastFoodController', () => {
  let controller: FavoriteFastFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteFastFoodController],
      providers: [FavoriteFastFoodService],
    }).compile();

    controller = module.get<FavoriteFastFoodController>(FavoriteFastFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
