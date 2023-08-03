import { Test, TestingModule } from '@nestjs/testing';
import { FoodCartController } from './food-cart.controller';
import { FoodCartService } from './food-cart.service';

describe('FoodCartController', () => {
  let controller: FoodCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodCartController],
      providers: [FoodCartService],
    }).compile();

    controller = module.get<FoodCartController>(FoodCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
