import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodCartService {
  getHelloMessage() {
    return { message: 'Hello, From Food-Cart-Service' };
  }
}
