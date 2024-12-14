import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { Food } from './entities/food.entity';
import { ImageFood } from '../image-food/entities/image-food.entity';

@Injectable()
export class FoodService extends TypeOrmCrudService<Food> {
  constructor(
    @InjectRepository(Food) repo: Repository<Food>,
    @InjectRepository(ImageFood)
    private readonly imageFoodRepo: Repository<ImageFood>,
  ) {
    super(repo);
  }

  async deleteImageFood(food_id: string, image_public_id: string) {
    const imageFood = await this.imageFoodRepo.findOne({
      where: { food_id, image_public_id },
    });
    if (imageFood) {
      return await this.imageFoodRepo.delete(imageFood.id);
    }
    throw new Error('Image not found');
  }

  async reduceQuantity(food_id: string, quantity: number) {
    const food = await this.repo.findOne({
      where: { id: food_id },
    });
    if (!food) {
      throw new Error('Food not found');
    }
    if (food.amount - quantity < 0) {
      throw new Error('Not enough quantity');
    }
    food.amount -= quantity;
    return await this.repo.save(food);
  }
}
