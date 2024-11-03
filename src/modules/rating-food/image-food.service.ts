import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { RatingFood } from './entities/rating-food.entity';

@Injectable()
export class RatingFoodService extends TypeOrmCrudService<RatingFood> {
  constructor(@InjectRepository(RatingFood) repo: Repository<RatingFood>) {
    super(repo);
  }
}
