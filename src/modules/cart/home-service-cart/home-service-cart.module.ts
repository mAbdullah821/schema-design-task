import { Module } from '@nestjs/common';
import { HomeServiceCartService } from './home-service-cart.service';
import { HomeServiceCartController } from './home-service-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HomeServiceCart,
  HomeServiceCartSchema,
} from './schemas/home-service-cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HomeServiceCart.name, schema: HomeServiceCartSchema },
    ]),
  ],
  controllers: [HomeServiceCartController],
  providers: [HomeServiceCartService],
})
export class HomeServiceCartModule {}
