import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { CustomerFavoriteFood } from './entities/customer-favorite-food.entity';

@Injectable()
export class CustomerFavoriteFoodService extends TypeOrmCrudService<CustomerFavoriteFood> {
  constructor(
    @InjectRepository(CustomerFavoriteFood)
    repo: Repository<CustomerFavoriteFood>,
  ) {
    super(repo);
  }
}
