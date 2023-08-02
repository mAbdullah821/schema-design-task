import { Controller } from '@nestjs/common';
import { PharmacyOrdersService } from './pharmacy-orders.service';

@Controller('pharmacy-orders')
export class PharmacyOrdersController {
  constructor(private readonly pharmacyOrdersService: PharmacyOrdersService) {}
}
