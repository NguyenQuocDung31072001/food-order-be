import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService extends TypeOrmCrudService<Customer> {
  constructor(@InjectRepository(Customer) repo: Repository<Customer>) {
    super(repo);
  }
}
