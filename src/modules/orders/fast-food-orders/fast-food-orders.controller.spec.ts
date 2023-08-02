import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodOrdersController } from './fast-food-orders.controller';
import { FastFoodOrdersService } from './fast-food-orders.service';

describe('FastFoodOrdersController', () => {
  let controller: FastFoodOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FastFoodOrdersController],
      providers: [FastFoodOrdersService],
    }).compile();

    controller = module.get<FastFoodOrdersController>(FastFoodOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
