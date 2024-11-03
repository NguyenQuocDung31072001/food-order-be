import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerFavoriteFood } from './entities/customer-favorite-food.entity';
import { CustomerFavoriteFoodController } from './customer-favorite-food.controller';
import { CustomerFavoriteFoodService } from './customer-favorite-food.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerFavoriteFood])],
  controllers: [CustomerFavoriteFoodController],
  providers: [CustomerFavoriteFoodService],
  exports: [CustomerFavoriteFoodService],
})
export class CustomerFavoriteFoodModule {}
