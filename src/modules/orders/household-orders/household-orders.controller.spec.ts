import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdOrdersController } from './household-orders.controller';
import { HouseholdOrdersService } from './household-orders.service';

describe('HouseholdOrdersController', () => {
  let controller: HouseholdOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseholdOrdersController],
      providers: [HouseholdOrdersService],
    }).compile();

    controller = module.get<HouseholdOrdersController>(HouseholdOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
