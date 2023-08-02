import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodOrdersService } from './fast-food-orders.service';

describe('FastFoodOrdersService', () => {
  let service: FastFoodOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FastFoodOrdersService],
    }).compile();

    service = module.get<FastFoodOrdersService>(FastFoodOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
