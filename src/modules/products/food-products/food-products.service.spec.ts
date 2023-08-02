import { Test, TestingModule } from '@nestjs/testing';
import { FoodProductsService } from './food-products.service';

describe('FoodProductsService', () => {
  let service: FoodProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodProductsService],
    }).compile();

    service = module.get<FoodProductsService>(FoodProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
