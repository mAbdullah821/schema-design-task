import { Controller, Get } from '@nestjs/common';
import { HouseholdProductsService } from './household-products.service';

@Controller('household-products')
export class HouseholdProductsController {
  constructor(
    private readonly householdProductsService: HouseholdProductsService,
  ) {}

  @Get()
  sayHello() {
    return this.householdProductsService.getHelloMessage();
  }
}
