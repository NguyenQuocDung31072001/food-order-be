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
}
