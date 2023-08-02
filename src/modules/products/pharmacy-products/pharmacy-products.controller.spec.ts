import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyProductsController } from './pharmacy-products.controller';
import { PharmacyProductsService } from './pharmacy-products.service';

describe('PharmacyProductsController', () => {
  let controller: PharmacyProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacyProductsController],
      providers: [PharmacyProductsService],
    }).compile();

    controller = module.get<PharmacyProductsController>(PharmacyProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
