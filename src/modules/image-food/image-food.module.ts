import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageFood } from './entities/image-food.entity';
import { ImageFoodService } from './image-food.service';
import { ImageFoodController } from './image-food.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ImageFood])],
  controllers: [ImageFoodController],
  providers: [ImageFoodService],
  exports: [ImageFoodService],
})
export class ImageFoodModule {}
