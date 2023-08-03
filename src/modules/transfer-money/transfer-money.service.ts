import { Injectable } from '@nestjs/common';

@Injectable()
export class TransferMoneyService {
  getHelloMessage() {
    return { message: 'Hello, From Transfer-Money-Service' };
  }
}
