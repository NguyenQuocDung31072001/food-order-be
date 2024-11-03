import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { ImageFood } from './entities/image-food.entity';

@Injectable()
export class ImageFoodService extends TypeOrmCrudService<ImageFood> {
  constructor(@InjectRepository(ImageFood) repo: Repository<ImageFood>) {
    super(repo);
  }
}
