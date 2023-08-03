import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeServiceReviewsService {
  getHelloMessage() {
    return { message: 'Hello, From Home-Service-Reviews-Service' };
  }
}
