import { Controller } from '@nestjs/common';
import { FoodCartService } from './food-cart.service';

@Controller('food-cart')
export class FoodCartController {
  constructor(private readonly foodCartService: FoodCartService) {}
}
