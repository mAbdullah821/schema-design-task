import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHelloMessage() {
    return { message: 'Hello, From Users-Service' };
  }
}
