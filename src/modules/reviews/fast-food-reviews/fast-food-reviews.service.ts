import { Injectable } from '@nestjs/common';

@Injectable()
export class FastFoodReviewsService {
  getHelloMessage() {
    return { message: 'Hello, From Fast-Food-Reviews-Service' };
  }
}
