import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteFoodService {
  getHelloMessage() {
    return { message: 'Hello, From Favorite-Food-Service' };
  }
}
