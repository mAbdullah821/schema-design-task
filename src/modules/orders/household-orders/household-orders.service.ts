import { Injectable } from '@nestjs/common';

@Injectable()
export class HouseholdOrdersService {
  getHelloMessage() {
    return { message: 'Hello, From Household-Orders-Service' };
  }
}
