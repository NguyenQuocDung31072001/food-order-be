import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartFood } from './entities/cart-food.entity';
import { CartFoodController } from './cart-food.controller';
import { CartFoodService } from './cart-food.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartFood])],
  controllers: [CartFoodController],
  providers: [CartFoodService],
  exports: [CartFoodService],
})
export class CartFoodModule {}
