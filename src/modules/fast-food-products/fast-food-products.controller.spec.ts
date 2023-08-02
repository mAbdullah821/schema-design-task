import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodProductsController } from './fast-food-products.controller';
import { FastFoodProductsService } from './fast-food-products.service';

describe('FastFoodProductsController', () => {
  let controller: FastFoodProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FastFoodProductsController],
      providers: [FastFoodProductsService],
    }).compile();

    controller = module.get<FastFoodProductsController>(FastFoodProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
