import { Controller, Get } from '@nestjs/common';
import { HouseholdCartService } from './household-cart.service';

@Controller('household-cart')
export class HouseholdCartController {
  constructor(private readonly householdCartService: HouseholdCartService) {}

  @Get()
  sayHello() {
    return this.householdCartService.getHelloMessage();
  }
}
