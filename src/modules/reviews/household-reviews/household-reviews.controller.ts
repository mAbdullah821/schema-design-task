import { Controller, Get } from '@nestjs/common';
import { HouseholdReviewsService } from './household-reviews.service';

@Controller('household-reviews')
export class HouseholdReviewsController {
  constructor(
    private readonly householdReviewsService: HouseholdReviewsService,
  ) {}

  @Get()
  sayHello() {
    return this.householdReviewsService.getHelloMessage();
  }
}
