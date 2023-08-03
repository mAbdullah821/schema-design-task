import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdCartController } from './household-cart.controller';
import { HouseholdCartService } from './household-cart.service';

describe('HouseholdCartController', () => {
  let controller: HouseholdCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseholdCartController],
      providers: [HouseholdCartService],
    }).compile();

    controller = module.get<HouseholdCartController>(HouseholdCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
