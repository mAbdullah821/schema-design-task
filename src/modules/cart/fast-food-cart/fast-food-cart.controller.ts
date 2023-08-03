import { Controller } from '@nestjs/common';
import { FastFoodCartService } from './fast-food-cart.service';

@Controller('fast-food-cart')
export class FastFoodCartController {
  constructor(private readonly fastFoodCartService: FastFoodCartService) {}
}
