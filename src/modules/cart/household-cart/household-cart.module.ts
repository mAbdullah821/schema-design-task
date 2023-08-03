import { Module } from '@nestjs/common';
import { HouseholdCartService } from './household-cart.service';
import { HouseholdCartController } from './household-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HouseholdCart,
  HouseholdCartSchema,
} from './schemas/household-cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HouseholdCart.name, schema: HouseholdCartSchema },
    ]),
  ],
  controllers: [HouseholdCartController],
  providers: [HouseholdCartService],
})
export class HouseholdCartModule {}
