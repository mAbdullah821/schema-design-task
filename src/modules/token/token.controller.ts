import { Controller, Get } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  sayHello() {
    return this.tokenService.getHelloMessage();
  }
}
