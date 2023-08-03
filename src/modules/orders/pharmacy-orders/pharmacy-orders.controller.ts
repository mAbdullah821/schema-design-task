import { Controller, Get } from '@nestjs/common';
import { PharmacyOrdersService } from './pharmacy-orders.service';

@Controller('pharmacy-orders')
export class PharmacyOrdersController {
  constructor(private readonly pharmacyOrdersService: PharmacyOrdersService) {}

  @Get()
  sayHello() {
    return this.pharmacyOrdersService.getHelloMessage();
  }
}
