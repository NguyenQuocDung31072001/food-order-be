import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Categories> {
  constructor(@InjectRepository(Categories) repo: Repository<Categories>) {
    super(repo);
  }
}
