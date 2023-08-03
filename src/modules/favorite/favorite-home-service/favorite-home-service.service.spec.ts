import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteHomeServiceService } from './favorite-home-service.service';

describe('FavoriteHomeServiceService', () => {
  let service: FavoriteHomeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteHomeServiceService],
    }).compile();

    service = module.get<FavoriteHomeServiceService>(FavoriteHomeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
