import { Test, TestingModule } from '@nestjs/testing';
import { FastFoodCartService } from './fast-food-cart.service';

describe('FastFoodCartService', () => {
  let service: FastFoodCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FastFoodCartService],
    }).compile();

    service = module.get<FastFoodCartService>(FastFoodCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
