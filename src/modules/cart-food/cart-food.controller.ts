import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { CartFood } from './entities/cart-food.entity';
import { CartFoodService } from './cart-food.service';

@Crud({
  model: {
    type: CartFood,
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
@Controller('cart-food')
export class CartFoodController implements CrudController<CartFood> {
  constructor(public service: CartFoodService) {}
}
