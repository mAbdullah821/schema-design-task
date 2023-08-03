import { Injectable } from '@nestjs/common';

@Injectable()
export class FastFoodProductsService {
  getHelloMessage() {
    return { message: 'Hello, From Fast-Food-Products-Service' };
  }
}
