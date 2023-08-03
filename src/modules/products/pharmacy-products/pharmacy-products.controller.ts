import { Controller, Get } from '@nestjs/common';
import { PharmacyProductsService } from './pharmacy-products.service';

@Controller('pharmacy-products')
export class PharmacyProductsController {
  constructor(
    private readonly pharmacyProductsService: PharmacyProductsService,
  ) {}

  @Get()
  sayHello() {
    return this.pharmacyProductsService.getHelloMessage();
  }
}
