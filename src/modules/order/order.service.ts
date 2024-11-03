import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService extends TypeOrmCrudService<Order> {
  constructor(
    @InjectRepository(Order)
    repo: Repository<Order>,
  ) {
    super(repo);
  }
}
