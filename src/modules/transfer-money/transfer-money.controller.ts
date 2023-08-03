import { Controller } from '@nestjs/common';
import { TransferMoneyService } from './transfer-money.service';

@Controller('transfer-money')
export class TransferMoneyController {
  constructor(private readonly transferMoneyService: TransferMoneyService) {}
}
