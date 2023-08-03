import { Module } from '@nestjs/common';
import { PharmacyCartService } from './pharmacy-cart.service';
import { PharmacyCartController } from './pharmacy-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PharmacyCart,
  PharmacyCartSchema,
} from './schemas/pharmacy-cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PharmacyCart.name, schema: PharmacyCartSchema },
    ]),
  ],
  controllers: [PharmacyCartController],
  providers: [PharmacyCartService],
})
export class PharmacyCartModule {}
