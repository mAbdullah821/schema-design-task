import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdOrdersService } from './household-orders.service';

describe('HouseholdOrdersService', () => {
  let service: HouseholdOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseholdOrdersService],
    }).compile();

    service = module.get<HouseholdOrdersService>(HouseholdOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
