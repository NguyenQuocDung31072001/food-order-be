import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { In, Repository } from 'typeorm';
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

  async customGetManyByIds(ids: string[]) {
    const result: any[] = await this.repo.find({
      where: {
        id: In(ids),
      },
      relations: ['food'],
      select: {
        customer_id: true,
        food_id: true,
        quantity: true,
        food: {
          amount: true,
          id: true,
          price: true,
        },
      },
    });
    return result as {
      customer_id: string;
      food_id: string;
      quantity: number;
      food: {
        amount: number;
        id: string;
        price: number;
      };
    }[];
  }

  async deleteRecordByIds(ids: string[]) {
    return this.repo.delete(ids);
  }
}
