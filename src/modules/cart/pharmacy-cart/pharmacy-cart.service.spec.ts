import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyCartService } from './pharmacy-cart.service';

describe('PharmacyCartService', () => {
  let service: PharmacyCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacyCartService],
    }).compile();

    service = module.get<PharmacyCartService>(PharmacyCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
