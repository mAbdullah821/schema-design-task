import { Injectable } from '@nestjs/common';

@Injectable()
export class PharmacyCartService {
  getHelloMessage() {
    return { message: 'Hello, From Pharmacy-Cart-Service' };
  }
}
