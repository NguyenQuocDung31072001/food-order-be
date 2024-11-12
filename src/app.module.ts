import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderFoodConfigModule } from './shared/order-food-config/order-food-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderFoodConfigService } from './shared/order-food-config/order-food-config.service';
import { CustomerModule } from './modules/customer/customer.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FoodModule } from './modules/food/food.module';
import { ImageFoodModule } from './modules/image-food/image-food.module';
import { RatingFoodModule } from './modules/rating-food/image-food.module';
import { CustomerFavoriteFoodModule } from './modules/customer-favorite-food/customer-favorite-food.module';
import { CartFoodModule } from './modules/cart-food/cart-food.module';
import { PaymentMethodModule } from './modules/payment-method/payment-method.module';
import { OrderModule } from './modules/order/order.module';
import { OrderFoodModule } from './modules/order-food/order-food.module';
import { RestaurantInformationModule } from './modules/restaurant-information/restaurant-information.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    OrderFoodConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [OrderFoodConfigModule],
      inject: [OrderFoodConfigService],
      useFactory: (cf: OrderFoodConfigService) => cf.get('database'),
    }),
    CustomerModule,
    CategoriesModule,
    FoodModule,
    ImageFoodModule,
    RatingFoodModule,
    CustomerFavoriteFoodModule,
    CartFoodModule,
    PaymentMethodModule,
    OrderModule,
    OrderFoodModule,
    RestaurantInformationModule,
    CloudinaryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
