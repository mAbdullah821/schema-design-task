import { Controller } from '@nestjs/common';
import { HomeServiceReviewsService } from './home-service-reviews.service';

@Controller('home-service-reviews')
export class HomeServiceReviewsController {
  constructor(private readonly homeServiceReviewsService: HomeServiceReviewsService) {}
}
