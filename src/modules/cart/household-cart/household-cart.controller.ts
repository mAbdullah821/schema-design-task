import { Controller } from '@nestjs/common';
import { HouseholdCartService } from './household-cart.service';

@Controller('household-cart')
export class HouseholdCartController {
  constructor(private readonly householdCartService: HouseholdCartService) {}
}
