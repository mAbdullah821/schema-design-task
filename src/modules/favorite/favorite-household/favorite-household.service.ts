import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteHouseholdService {
  getHelloMessage() {
    return { message: 'Hello, From Favorite-Household-Service' };
  }
}
