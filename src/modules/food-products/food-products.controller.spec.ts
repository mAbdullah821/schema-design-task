import { Test, TestingModule } from '@nestjs/testing';
import { FoodProductsController } from './food-products.controller';
import { FoodProductsService } from './food-products.service';

describe('FoodProductsController', () => {
  let controller: FoodProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodProductsController],
      providers: [FoodProductsService],
    }).compile();

    controller = module.get<FoodProductsController>(FoodProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
