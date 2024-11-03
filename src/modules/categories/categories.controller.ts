import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { Categories } from './entities/categories.entity';
import { CategoriesService } from './categories.service';

@Crud({
  model: {
    type: Categories,
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
@Controller('categories')
export class CategoriesController implements CrudController<Categories> {
  constructor(public service: CategoriesService) {}
}
