import { Module } from '@nestjs/common';
import { PharmacyOrdersService } from './pharmacy-orders.service';
import { PharmacyOrdersController } from './pharmacy-orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PharmacyOrder,
  PharmacyOrderSchema,
} from './schemas/pharmacy-order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PharmacyOrder.name, schema: PharmacyOrderSchema },
    ]),
  ],
  controllers: [PharmacyOrdersController],
  providers: [PharmacyOrdersService],
})
export class PharmacyOrdersModule {}
