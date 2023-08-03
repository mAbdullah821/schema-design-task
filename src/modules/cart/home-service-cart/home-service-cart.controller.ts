import { Controller } from '@nestjs/common';
import { HomeServiceCartService } from './home-service-cart.service';

@Controller('home-service-cart')
export class HomeServiceCartController {
  constructor(private readonly homeServiceCartService: HomeServiceCartService) {}
}
