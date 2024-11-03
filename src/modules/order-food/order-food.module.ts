import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderFoodController } from './order-food.controller';
import { OrderFoodService } from './order-food.service';
import { OrderFood } from './entities/order-food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderFood])],
  controllers: [OrderFoodController],
  providers: [OrderFoodService],
  exports: [OrderFoodService],
})
export class OrderFoodModule {}
