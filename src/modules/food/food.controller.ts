import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { Food } from './entities/food.entity';
import { FoodService } from './food.service';

@Crud({
  model: {
    type: Food,
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
@Controller('food')
export class FoodController implements CrudController<Food> {
  constructor(public service: FoodService) {}
}
