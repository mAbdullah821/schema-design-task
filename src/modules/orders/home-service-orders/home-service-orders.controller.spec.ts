import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceOrdersController } from './home-service-orders.controller';
import { HomeServiceOrdersService } from './home-service-orders.service';

describe('HomeServiceOrdersController', () => {
  let controller: HomeServiceOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeServiceOrdersController],
      providers: [HomeServiceOrdersService],
    }).compile();

    controller = module.get<HomeServiceOrdersController>(HomeServiceOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
