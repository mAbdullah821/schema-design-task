import { Test, TestingModule } from '@nestjs/testing';
import { HomeServiceOrdersService } from './home-service-orders.service';

describe('HomeServiceOrdersService', () => {
  let service: HomeServiceOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeServiceOrdersService],
    }).compile();

    service = module.get<HomeServiceOrdersService>(HomeServiceOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
