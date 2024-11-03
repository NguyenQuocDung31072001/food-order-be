import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { ImageFood } from './entities/image-food.entity';
import { ImageFoodService } from './image-food.service';

@Crud({
  model: {
    type: ImageFood,
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
@Controller('image-food')
export class ImageFoodController implements CrudController<ImageFood> {
  constructor(public service: ImageFoodService) {}
}
