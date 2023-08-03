import { Controller, Get } from '@nestjs/common';
import { FastFoodProductsService } from './fast-food-products.service';

@Controller('fast-food-products')
export class FastFoodProductsController {
  constructor(
    private readonly fastFoodProductsService: FastFoodProductsService,
  ) {}

  @Get()
  sayHello() {
    return this.fastFoodProductsService.getHelloMessage();
  }
}
