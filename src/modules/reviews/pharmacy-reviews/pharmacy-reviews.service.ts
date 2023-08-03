import { Injectable } from '@nestjs/common';

@Injectable()
export class PharmacyReviewsService {
  getHelloMessage() {
    return { message: 'Hello, From Pharmacy-Reviews-Service' };
  }
}
