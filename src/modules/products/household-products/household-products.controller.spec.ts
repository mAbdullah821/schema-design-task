import { Test, TestingModule } from '@nestjs/testing';
import { HouseholdProductsController } from './household-products.controller';
import { HouseholdProductsService } from './household-products.service';

describe('HouseholdProductsController', () => {
  let controller: HouseholdProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseholdProductsController],
      providers: [HouseholdProductsService],
    }).compile();

    controller = module.get<HouseholdProductsController>(HouseholdProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
