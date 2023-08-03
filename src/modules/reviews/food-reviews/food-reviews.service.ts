import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodReviewsService {
  getHelloMessage() {
    return { message: 'Hello, From Food-Reviews-Service' };
  }
}
