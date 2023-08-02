import { Controller } from '@nestjs/common';
import { HouseholdOrdersService } from './household-orders.service';

@Controller('household-orders')
export class HouseholdOrdersController {
  constructor(private readonly householdOrdersService: HouseholdOrdersService) {}
}
