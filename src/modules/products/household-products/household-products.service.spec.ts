import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdProductsService } from './household-products.service';

describe('HouseholdProductsService', () => {
  let service: HouseholdProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseholdProductsService],
    }).compile();

    service = module.get<HouseholdProductsService>(HouseholdProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
