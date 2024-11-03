import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';

@Crud({
  model: {
    type: Customer,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    exclude: ['id'],
    join: {},
  },
})
@Controller('customer')
export class CustomerController implements CrudController<Customer> {
  constructor(public service: CustomerService) {}
}
