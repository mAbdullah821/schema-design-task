import { Injectable } from '@nestjs/common';

@Injectable()
export class PharmacyProductsService {
  getHelloMessage() {
    return { message: 'Hello, From Pharmacy-Products-Service' };
  }
}
