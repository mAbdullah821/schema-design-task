import { Module } from '@nestjs/common';
import { FavoriteHomeServiceService } from './favorite-home-service.service';
import { FavoriteHomeServiceController } from './favorite-home-service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FavoriteHomeService,
  FavoriteHomeServiceSchema,
} from './schemas/favorite-home-service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FavoriteHomeService.name, schema: FavoriteHomeServiceSchema },
    ]),
  ],
  controllers: [FavoriteHomeServiceController],
  providers: [FavoriteHomeServiceService],
})
export class FavoriteHomeServiceModule {}
