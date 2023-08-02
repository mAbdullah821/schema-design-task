import { Module } from '@nestjs/common';
import { HouseholdProductsService } from './household-products.service';
import { HouseholdProductsController } from './household-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Household, HouseholdSchema } from './schemas/household.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Household.name, schema: HouseholdSchema },
    ]),
  ],
  controllers: [HouseholdProductsController],
  providers: [HouseholdProductsService],
})
export class HouseholdProductsModule {}
