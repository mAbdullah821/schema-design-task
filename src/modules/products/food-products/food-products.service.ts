import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodProductsService {
  getHelloMessage() {
    return { message: 'Hello, From Food-Products-Service' };
  }
}
