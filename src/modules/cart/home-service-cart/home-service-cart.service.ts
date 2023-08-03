import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeServiceCartService {
  getHelloMessage() {
    return { message: 'Hello, From Home-Service-Cart-Service' };
  }
}
