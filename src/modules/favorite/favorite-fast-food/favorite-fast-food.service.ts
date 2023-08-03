import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteFastFoodService {
  getHelloMessage() {
    return { message: 'Hello, From Favorite-Fast-Food-Service' };
  }
}
