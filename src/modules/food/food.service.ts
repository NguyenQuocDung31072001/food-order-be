import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService extends TypeOrmCrudService<Food> {
  constructor(@InjectRepository(Food) repo: Repository<Food>) {
    super(repo);
  }
}
