import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { OrderFood } from './entities/order-food.entity';

@Injectable()
export class OrderFoodService extends TypeOrmCrudService<OrderFood> {
  constructor(
    @InjectRepository(OrderFood)
    repo: Repository<OrderFood>,
  ) {
    super(repo);
  }
}
