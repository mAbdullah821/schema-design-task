import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  getHelloMessage() {
    return { message: 'Hello, From Chat-Service' };
  }
}
