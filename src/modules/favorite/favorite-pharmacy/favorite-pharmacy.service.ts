import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritePharmacyService {
  getHelloMessage() {
    return { message: 'Hello, From Favorite-Pharmacy-Service' };
  }
}
