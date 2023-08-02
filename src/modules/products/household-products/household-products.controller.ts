import { Controller } from '@nestjs/common';
import { HouseholdProductsService } from './household-products.service';

@Controller('household-products')
export class HouseholdProductsController {
  constructor(private readonly householdProductsService: HouseholdProductsService) {}
}
