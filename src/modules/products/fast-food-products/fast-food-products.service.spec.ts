import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodProductsService } from './fast-food-products.service';

describe('FastFoodProductsService', () => {
  let service: FastFoodProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FastFoodProductsService],
    }).compile();

    service = module.get<FastFoodProductsService>(FastFoodProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
