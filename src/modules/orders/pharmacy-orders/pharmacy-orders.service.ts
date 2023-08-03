import { Injectable } from '@nestjs/common';

@Injectable()
export class PharmacyOrdersService {
  getHelloMessage() {
    return { message: 'Hello, From Pharmacy-Orders-Service' };
  }
}
