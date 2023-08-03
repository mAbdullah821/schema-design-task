import { Injectable } from '@nestjs/common';

@Injectable()
export class HouseholdReviewsService {
  getHelloMessage() {
    return { message: 'Hello, From Household-Reviews-Service' };
  }
}
