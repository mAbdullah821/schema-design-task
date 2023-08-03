import { Controller } from '@nestjs/common';
import { FoodReviewsService } from './food-reviews.service';

@Controller('food-reviews')
export class FoodReviewsController {
  constructor(private readonly foodReviewsService: FoodReviewsService) {}
}
