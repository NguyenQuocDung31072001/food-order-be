import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingFoodService } from './image-food.service';
import { RatingFoodController } from './image-food.controller';
import { RatingFood } from './entities/rating-food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingFood])],
  controllers: [RatingFoodController],
  providers: [RatingFoodService],
  exports: [RatingFoodService],
})
export class RatingFoodModule {}
