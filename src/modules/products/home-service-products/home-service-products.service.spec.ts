import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceProductsService } from './home-service-products.service';

describe('HomeServiceProductsService', () => {
  let service: HomeServiceProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeServiceProductsService],
    }).compile();

    service = module.get<HomeServiceProductsService>(HomeServiceProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
