import { Controller, Get } from '@nestjs/common';
import { PharmacyReviewsService } from './pharmacy-reviews.service';

@Controller('pharmacy-reviews')
export class PharmacyReviewsController {
  constructor(
    private readonly pharmacyReviewsService: PharmacyReviewsService,
  ) {}

  @Get()
  sayHello() {
    return this.pharmacyReviewsService.getHelloMessage();
  }
}
