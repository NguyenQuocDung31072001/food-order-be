import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { PaymentMethod } from './entities/payment-method.entity';
import { PaymentMethodService } from './payment-method.service';

@Crud({
  model: {
    type: PaymentMethod,
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
@Controller('payment-methods')
export class PaymentMethodController implements CrudController<PaymentMethod> {
  constructor(public service: PaymentMethodService) {}
}
