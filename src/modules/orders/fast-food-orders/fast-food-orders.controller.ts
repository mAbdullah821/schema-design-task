import { Controller } from '@nestjs/common';
import { FastFoodOrdersService } from './fast-food-orders.service';

@Controller('fast-food-orders')
export class FastFoodOrdersController {
  constructor(private readonly fastFoodOrdersService: FastFoodOrdersService) {}
}
