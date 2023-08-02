import { Controller } from '@nestjs/common';
import { PharmacyProductsService } from './pharmacy-products.service';

@Controller('pharmacy-products')
export class PharmacyProductsController {
  constructor(private readonly pharmacyProductsService: PharmacyProductsService) {}
}
