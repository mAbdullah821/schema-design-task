import { Module } from '@nestjs/common';
import { HomeServiceProductsService } from './home-service-products.service';
import { HomeServiceProductsController } from './home-service-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeService, HomeServiceSchema } from './schemas/home-service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HomeService.name, schema: HomeServiceSchema },
    ]),
  ],
  controllers: [HomeServiceProductsController],
  providers: [HomeServiceProductsService],
})
export class HomeServiceProductsModule {}
