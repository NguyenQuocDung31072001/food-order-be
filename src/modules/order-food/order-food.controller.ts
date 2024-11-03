import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { OrderFood } from './entities/order-food.entity';
import { OrderFoodService } from './order-food.service';

@Crud({
  model: {
    type: OrderFood,
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
@Controller('order-food')
export class OrderFoodController implements CrudController<OrderFood> {
  constructor(public service: OrderFoodService) {}
}
