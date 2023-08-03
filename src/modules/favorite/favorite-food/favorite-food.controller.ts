import { Controller, Get } from '@nestjs/common';
import { FavoriteFoodService } from './favorite-food.service';

@Controller('favorite-food')
export class FavoriteFoodController {
  constructor(private readonly favoriteFoodService: FavoriteFoodService) {}

  @Get()
  sayHello() {
    return this.favoriteFoodService.getHelloMessage();
  }
}
