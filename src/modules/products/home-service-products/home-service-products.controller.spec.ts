import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceProductsController } from './home-service-products.controller';
import { HomeServiceProductsService } from './home-service-products.service';

describe('HomeServiceProductsController', () => {
  let controller: HomeServiceProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeServiceProductsController],
      providers: [HomeServiceProductsService],
    }).compile();

    controller = module.get<HomeServiceProductsController>(HomeServiceProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
