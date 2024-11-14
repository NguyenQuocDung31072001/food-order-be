import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { CartFood } from './entities/cart-food.entity';

@Injectable()
export class CartFoodService extends TypeOrmCrudService<CartFood> {
  constructor(
    @InjectRepository(CartFood)
    repo: Repository<CartFood>,
  ) {
    super(repo);
  }

  async addCartFood(body: any) {
    const { food_id, customer_id, quantity } = body ?? {};
    const existItem = await this.repo.findOne({
      where: {
        food_id,
        customer_id,
      },
    });
    if (!existItem) {
      return this.repo.save({
        food_id,
        customer_id,
        quantity,
      });
    }
    existItem.quantity += quantity;
    return this.repo.save(existItem);
  }

  async decreaseCartFood(body: any) {
    const { food_id, customer_id, quantity } = body ?? {};
    const existItem = await this.repo.findOne({
      where: {
        food_id,
        customer_id,
      },
    });
    if (!existItem) {
      return {
        statusCode: 404,
        message: 'Not found',
      };
    }
    if (existItem.quantity - quantity <= 0) {
      return this.repo.delete(existItem.id);
    }
    existItem.quantity -= quantity;
    return this.repo.save(existItem);
  }
}
