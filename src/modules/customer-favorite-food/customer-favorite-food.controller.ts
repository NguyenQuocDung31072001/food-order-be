import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { CustomerFavoriteFood } from './entities/customer-favorite-food.entity';
import { CustomerFavoriteFoodService } from './customer-favorite-food.service';

@Crud({
  model: {
    type: CustomerFavoriteFood,
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
@Controller('customer-favorite-food')
export class CustomerFavoriteFoodController
  implements CrudController<CustomerFavoriteFood>
{
  constructor(public service: CustomerFavoriteFoodService) {}
}
