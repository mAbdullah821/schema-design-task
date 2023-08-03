import { Controller, Get } from '@nestjs/common';
import { HouseholdOrdersService } from './household-orders.service';

@Controller('household-orders')
export class HouseholdOrdersController {
  constructor(
    private readonly householdOrdersService: HouseholdOrdersService,
  ) {}

  @Get()
  sayHello() {
    return this.householdOrdersService.getHelloMessage();
  }
}
