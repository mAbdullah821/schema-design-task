import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  getHelloMessage() {
    return { message: 'Hello, From Token-Service' };
  }
}
