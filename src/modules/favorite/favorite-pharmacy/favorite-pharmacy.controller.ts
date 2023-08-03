import { Controller, Get } from '@nestjs/common';
import { FavoritePharmacyService } from './favorite-pharmacy.service';

@Controller('favorite-pharmacy')
export class FavoritePharmacyController {
  constructor(
    private readonly favoritePharmacyService: FavoritePharmacyService,
  ) {}

  @Get()
  sayHello() {
    return this.favoritePharmacyService.getHelloMessage();
  }
}
