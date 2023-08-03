import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteHomeServiceService {
  getHelloMessage() {
    return { message: 'Hello, From Favorite-Home-Service-Service' };
  }
}
