import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';

@Crud({
  model: {
    type: Order,
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
@Controller('order')
export class OrderController implements CrudController<Order> {
  constructor(public service: OrderService) {}
}
