import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeServiceOrdersService {
  getHelloMessage() {
    return { message: 'Hello, From Home-Service-Orders-Service' };
  }
}
