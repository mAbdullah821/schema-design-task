import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodCartController } from './fast-food-cart.controller';
import { FastFoodCartService } from './fast-food-cart.service';

describe('FastFoodCartController', () => {
  let controller: FastFoodCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FastFoodCartController],
      providers: [FastFoodCartService],
    }).compile();

    controller = module.get<FastFoodCartController>(FastFoodCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
