import { Module } from '@nestjs/common';
import { HomeServiceOrdersService } from './home-service-orders.service';
import { HomeServiceOrdersController } from './home-service-orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HomeServiceOrder,
  HomeServiceOrderSchema,
} from './schemas/home-service-order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HomeServiceOrder.name, schema: HomeServiceOrderSchema },
    ]),
  ],
  controllers: [HomeServiceOrdersController],
  providers: [HomeServiceOrdersService],
})
export class HomeServiceOrdersModule {}
