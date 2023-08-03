import { Module } from '@nestjs/common';
import { FavoritePharmacyService } from './favorite-pharmacy.service';
import { FavoritePharmacyController } from './favorite-pharmacy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FavoritePharmacy,
  FavoritePharmacySchema,
} from './schemas/favorite-pharmacy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FavoritePharmacy.name, schema: FavoritePharmacySchema },
    ]),
  ],
  controllers: [FavoritePharmacyController],
  providers: [FavoritePharmacyService],
})
export class FavoritePharmacyModule {}
