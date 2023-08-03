import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeServiceProductsService {
  getHelloMessage() {
    return { message: 'Hello, From Home-Service-Products-Service' };
  }
}
