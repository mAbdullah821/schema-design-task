import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceCartController } from './home-service-cart.controller';
import { HomeServiceCartService } from './home-service-cart.service';

describe('HomeServiceCartController', () => {
  let controller: HomeServiceCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeServiceCartController],
      providers: [HomeServiceCartService],
    }).compile();

    controller = module.get<HomeServiceCartController>(HomeServiceCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
