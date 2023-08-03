import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatMessageService {
  getHelloMessage() {
    return { message: 'Hello, From Chat-Message-Service' };
  }
}
