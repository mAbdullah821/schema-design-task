import { Controller } from '@nestjs/common';
import { FastFoodProductsService } from './fast-food-products.service';

@Controller('fast-food-products')
export class FastFoodProductsController {
  constructor(private readonly fastFoodProductsService: FastFoodProductsService) {}
}
