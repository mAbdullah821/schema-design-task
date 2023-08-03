import { Injectable } from '@nestjs/common';

@Injectable()
export class FastFoodOrdersService {
  getHelloMessage() {
    return { message: 'Hello, From Fast-Food-Orders-Service' };
  }
}
