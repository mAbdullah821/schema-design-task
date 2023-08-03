import { Controller } from '@nestjs/common';
import { PharmacyCartService } from './pharmacy-cart.service';

@Controller('pharmacy-cart')
export class PharmacyCartController {
  constructor(private readonly pharmacyCartService: PharmacyCartService) {}
}
