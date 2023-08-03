import { Controller } from '@nestjs/common';
import { FastFoodReviewsService } from './fast-food-reviews.service';

@Controller('fast-food-reviews')
export class FastFoodReviewsController {
  constructor(private readonly fastFoodReviewsService: FastFoodReviewsService) {}
}
