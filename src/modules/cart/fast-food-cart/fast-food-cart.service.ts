import { Injectable } from '@nestjs/common';

@Injectable()
export class FastFoodCartService {
  getHelloMessage() {
    return { message: 'Hello, From Fast-Food-Cart-Service' };
  }
}
