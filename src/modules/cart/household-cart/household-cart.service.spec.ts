import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdCartService } from './household-cart.service';

describe('HouseholdCartService', () => {
  let service: HouseholdCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseholdCartService],
    }).compile();

    service = module.get<HouseholdCartService>(HouseholdCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
