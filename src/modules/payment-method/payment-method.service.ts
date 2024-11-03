import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './entities/payment-method.entity';

@Injectable()
export class PaymentMethodService extends TypeOrmCrudService<PaymentMethod> {
  constructor(
    @InjectRepository(PaymentMethod)
    repo: Repository<PaymentMethod>,
  ) {
    super(repo);
  }
}
