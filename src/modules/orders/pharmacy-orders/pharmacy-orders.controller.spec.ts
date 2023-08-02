import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyOrdersController } from './pharmacy-orders.controller';
import { PharmacyOrdersService } from './pharmacy-orders.service';

describe('PharmacyOrdersController', () => {
  let controller: PharmacyOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacyOrdersController],
      providers: [PharmacyOrdersService],
    }).compile();

    controller = module.get<PharmacyOrdersController>(PharmacyOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
