import { Injectable } from '@nestjs/common';

@Injectable()
export class HouseholdProductsService {
  getHelloMessage() {
    return { message: 'Hello, From Household-Products-Service' };
  }
}
