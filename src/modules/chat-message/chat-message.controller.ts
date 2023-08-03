import { Controller, Get } from '@nestjs/common';
import { ChatMessageService } from './chat-message.service';

@Controller('chat-message')
export class ChatMessageController {
  constructor(private readonly chatMessageService: ChatMessageService) {}

  @Get()
  sayHello() {
    return this.chatMessageService.getHelloMessage();
  }
}
