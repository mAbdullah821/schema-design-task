import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getHelloMessage() {
    return { message: 'Hello, From Category-Service' };
  }
}
