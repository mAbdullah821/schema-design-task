import { Controller, Get } from '@nestjs/common';
import { HomeServiceProductsService } from './home-service-products.service';

@Controller('home-service-products')
export class HomeServiceProductsController {
  constructor(
    private readonly homeServiceProductsService: HomeServiceProductsService,
  ) {}

  @Get()
  sayHello() {
    return this.homeServiceProductsService.getHelloMessage();
  }
}
