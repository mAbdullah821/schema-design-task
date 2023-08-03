import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceCartService } from './home-service-cart.service';

describe('HomeServiceCartService', () => {
  let service: HomeServiceCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeServiceCartService],
    }).compile();

    service = module.get<HomeServiceCartService>(HomeServiceCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
