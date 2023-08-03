import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyCartController } from './pharmacy-cart.controller';
import { PharmacyCartService } from './pharmacy-cart.service';

describe('PharmacyCartController', () => {
  let controller: PharmacyCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacyCartController],
      providers: [PharmacyCartService],
    }).compile();

    controller = module.get<PharmacyCartController>(PharmacyCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
