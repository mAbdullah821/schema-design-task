import { Controller, Get } from '@nestjs/common';
import { FavoriteFastFoodService } from './favorite-fast-food.service';

@Controller('favorite-fast-food')
export class FavoriteFastFoodController {
  constructor(
    private readonly favoriteFastFoodService: FavoriteFastFoodService,
  ) {}

  @Get()
  sayHello() {
    return this.favoriteFastFoodService.getHelloMessage();
  }
}
