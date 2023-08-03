import { Controller, Get } from '@nestjs/common';
import { FoodOrdersService } from './food-orders.service';

@Controller('food-orders')
export class FoodOrdersController {
  constructor(private readonly foodOrdersService: FoodOrdersService) {}

  @Get()
  sayHello() {
    return this.foodOrdersService.getHelloMessage();
  }
}
