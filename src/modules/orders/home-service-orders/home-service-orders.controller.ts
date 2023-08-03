import { Controller, Get } from '@nestjs/common';
import { HomeServiceOrdersService } from './home-service-orders.service';

@Controller('home-service-orders')
export class HomeServiceOrdersController {
  constructor(
    private readonly homeServiceOrdersService: HomeServiceOrdersService,
  ) {}

  @Get()
  sayHello() {
    return this.homeServiceOrdersService.getHelloMessage();
  }
}
