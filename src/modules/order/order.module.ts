import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { BillingInformation } from './entities/billing-information.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { BillingInformationService } from './billing-information.service';
import { CartFoodModule } from '../cart-food/cart-food.module';
import { OrderFoodModule } from '../order-food/order-food.module';
import { FoodModule } from '../food/food.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, BillingInformation]),
    CartFoodModule,
    OrderFoodModule,
    FoodModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, BillingInformationService],
  exports: [OrderService],
})
export class OrderModule {}
