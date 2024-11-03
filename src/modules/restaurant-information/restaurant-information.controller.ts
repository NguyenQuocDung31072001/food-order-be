import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { RestaurantInformation } from './entities/restaurant-information.entity';
import { RestaurantInformationService } from './restaurant-information.service';

@Crud({
  model: {
    type: RestaurantInformation,
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
@Controller('restaurant-information')
export class RestaurantInformationController
  implements CrudController<RestaurantInformation>
{
  constructor(public service: RestaurantInformationService) {}
}
