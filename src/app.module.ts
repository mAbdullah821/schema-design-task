import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoURL } from './mongoDB-url.constant';
import { FastFoodCartModule } from './modules/cart/fast-food-cart/fast-food-cart.module';
import { FoodCartModule } from './modules/cart/food-cart/food-cart.module';
import { HomeServiceCartModule } from './modules/cart/home-service-cart/home-service-cart.module';
import { HouseholdCartModule } from './modules/cart/household-cart/household-cart.module';
import { PharmacyCartModule } from './modules/cart/pharmacy-cart/pharmacy-cart.module';
import { CategoryModule } from './modules/category/category.module';
import { ChatModule } from './modules/chat/chat.module';
import { ChatMessageModule } from './modules/chat-message/chat-message.module';
import { FavoriteFastFoodModule } from './modules/favorite/favorite-fast-food/favorite-fast-food.module';
import { FavoriteFoodModule } from './modules/favorite/favorite-food/favorite-food.module';
import { FavoriteHomeServiceModule } from './modules/favorite/favorite-home-service/favorite-home-service.module';
import { FavoriteHouseholdModule } from './modules/favorite/favorite-household/favorite-household.module';
import { FavoritePharmacyModule } from './modules/favorite/favorite-pharmacy/favorite-pharmacy.module';
import { FastFoodOrdersModule } from './modules/orders/fast-food-orders/fast-food-orders.module';
import { FoodOrdersModule } from './modules/orders/food-orders/food-orders.module';
import { HomeServiceOrdersModule } from './modules/orders/home-service-orders/home-service-orders.module';
import { HouseholdOrdersModule } from './modules/orders/household-orders/household-orders.module';
import { PharmacyOrdersModule } from './modules/orders/pharmacy-orders/pharmacy-orders.module';
import { FastFoodProductsModule } from './modules/products/fast-food-products/fast-food-products.module';
import { FoodProductsModule } from './modules/products/food-products/food-products.module';
import { HomeServiceProductsModule } from './modules/products/home-service-products/home-service-products.module';
import { HouseholdProductsModule } from './modules/products/household-products/household-products.module';
import { PharmacyProductsModule } from './modules/products/pharmacy-products/pharmacy-products.module';
import { FastFoodReviewsModule } from './modules/reviews/fast-food-reviews/fast-food-reviews.module';
import { FoodReviewsModule } from './modules/reviews/food-reviews/food-reviews.module';
import { HomeServiceReviewsModule } from './modules/reviews/home-service-reviews/home-service-reviews.module';
import { HouseholdReviewsModule } from './modules/reviews/household-reviews/household-reviews.module';
import { PharmacyReviewsModule } from './modules/reviews/pharmacy-reviews/pharmacy-reviews.module';
import { TokenModule } from './modules/token/token.module';
import { TransferMoneyModule } from './modules/transfer-money/transfer-money.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoURL),
    FastFoodCartModule,
    FoodCartModule,
    HomeServiceCartModule,
    HouseholdCartModule,
    PharmacyCartModule,
    CategoryModule,
    ChatModule,
    ChatMessageModule,
    FavoriteFastFoodModule,
    FavoriteFoodModule,
    FavoriteHomeServiceModule,
    FavoriteHouseholdModule,
    FavoritePharmacyModule,
    FastFoodOrdersModule,
    FoodOrdersModule,
    HomeServiceOrdersModule,
    HouseholdOrdersModule,
    PharmacyOrdersModule,
    FastFoodProductsModule,
    FoodProductsModule,
    HouseholdProductsModule,
    HomeServiceProductsModule,
    PharmacyProductsModule,
    FastFoodReviewsModule,
    FoodReviewsModule,
    HouseholdReviewsModule,
    HomeServiceReviewsModule,
    PharmacyReviewsModule,
    TokenModule,
    TransferMoneyModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
