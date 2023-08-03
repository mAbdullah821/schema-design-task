import { Controller } from '@nestjs/common';
import { FavoriteHouseholdService } from './favorite-household.service';

@Controller('favorite-household')
export class FavoriteHouseholdController {
  constructor(private readonly favoriteHouseholdService: FavoriteHouseholdService) {}
}
