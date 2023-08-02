import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyProductsService } from './pharmacy-products.service';

describe('PharmacyProductsService', () => {
  let service: PharmacyProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacyProductsService],
    }).compile();

    service = module.get<PharmacyProductsService>(PharmacyProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
