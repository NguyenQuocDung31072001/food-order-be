import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { Voucher } from './entities/voucher.entity';

@Injectable()
export class VoucherService extends TypeOrmCrudService<Voucher> {
  constructor(@InjectRepository(Voucher) repo: Repository<Voucher>) {
    super(repo);
  }
}
