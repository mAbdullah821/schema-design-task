import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteHomeServiceController } from './favorite-home-service.controller';
import { FavoriteHomeServiceService } from './favorite-home-service.service';

describe('FavoriteHomeServiceController', () => {
  let controller: FavoriteHomeServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteHomeServiceController],
      providers: [FavoriteHomeServiceService],
    }).compile();

    controller = module.get<FavoriteHomeServiceController>(FavoriteHomeServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
