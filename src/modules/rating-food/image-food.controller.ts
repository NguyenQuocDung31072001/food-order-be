import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { RatingFoodService } from './image-food.service';
import { RatingFood } from './entities/rating-food.entity';

@Crud({
  model: {
    type: RatingFood,
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
@Controller('rating-food')
export class RatingFoodController implements CrudController<RatingFood> {
  constructor(public service: RatingFoodService) {}
}
