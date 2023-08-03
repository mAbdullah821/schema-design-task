import { Controller, Get } from '@nestjs/common';
import { FoodCartService } from './food-cart.service';

@Controller('food-cart')
export class FoodCartController {
  constructor(private readonly foodCartService: FoodCartService) {}

  @Get()
  sayHello() {
    return this.foodCartService.getHelloMessage();
  }
}
