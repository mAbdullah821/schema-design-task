import { Controller, Get } from '@nestjs/common';
import { FoodProductsService } from './food-products.service';

@Controller('food-products')
export class FoodProductsController {
  constructor(private readonly foodProductsService: FoodProductsService) {}

  @Get()
  sayHello() {
    return this.foodProductsService.getHelloMessage();
  }
}
