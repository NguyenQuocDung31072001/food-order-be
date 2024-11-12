import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { CloudinaryService } from '../cloudinary/cloudinary.services';
import { ImageFood } from '../image-food/entities/image-food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Food, ImageFood])],
  controllers: [FoodController],
  providers: [FoodService, CloudinaryService],
  exports: [FoodService],
})
export class FoodModule {}
