import { Injectable } from '@nestjs/common';

@Injectable()
export class HouseholdCartService {
  getHelloMessage() {
    return { message: 'Hello, From Household-Cart-Service' };
  }
}
