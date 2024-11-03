import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { RestaurantInformation } from './entities/restaurant-information.entity';

@Injectable()
export class RestaurantInformationService extends TypeOrmCrudService<RestaurantInformation> {
  constructor(
    @InjectRepository(RestaurantInformation)
    repo: Repository<RestaurantInformation>,
  ) {
    super(repo);
  }
}
