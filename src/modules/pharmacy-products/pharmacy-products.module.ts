import { Module } from '@nestjs/common';
import { PharmacyProductsService } from './pharmacy-products.service';
import { PharmacyProductsController } from './pharmacy-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pharmacy, PharmacySchema } from './schemas/Pharmacy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pharmacy.name, schema: PharmacySchema },
    ]),
  ],
  controllers: [PharmacyProductsController],
  providers: [PharmacyProductsService],
})
export class PharmacyProductsModule {}
