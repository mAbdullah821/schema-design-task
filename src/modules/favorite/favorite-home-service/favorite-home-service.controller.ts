import { Controller } from '@nestjs/common';
import { FavoriteHomeServiceService } from './favorite-home-service.service';

@Controller('favorite-home-service')
export class FavoriteHomeServiceController {
  constructor(private readonly favoriteHomeServiceService: FavoriteHomeServiceService) {}
}
