import { Module } from '@nestjs/common';
import { FavoriteHouseholdService } from './favorite-household.service';
import { FavoriteHouseholdController } from './favorite-household.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FavoriteHousehold,
  FavoriteHouseholdSchema,
} from './schemas/favorite-household.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FavoriteHousehold.name, schema: FavoriteHouseholdSchema },
    ]),
  ],
  controllers: [FavoriteHouseholdController],
  providers: [FavoriteHouseholdService],
})
export class FavoriteHouseholdModule {}
