import { Controller } from '@nestjs/common';
import { FoodProductsService } from './food-products.service';

@Controller('food-products')
export class FoodProductsController {
  constructor(private readonly foodProductsService: FoodProductsService) {}
}
