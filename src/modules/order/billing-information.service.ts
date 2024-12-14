import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { BillingInformation } from './entities/billing-information.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingInformationDto } from './dto/billing-infomation.dto';

@Injectable()
export class BillingInformationService extends TypeOrmCrudService<BillingInformation> {
  constructor(
    @InjectRepository(BillingInformation)
    repo: Repository<BillingInformation>,
  ) {
    super(repo);
  }

  async customCreateOne(data: BillingInformationDto) {
    return await this.repo.save(data);
  }
}
