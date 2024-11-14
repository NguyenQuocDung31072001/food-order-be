import { Crud, CrudController } from '@dataui/crud';
import { Body, Controller, Post } from '@nestjs/common';
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
    join: {
      food: {
        eager: true,
      },
      'food.imageFoods': {
        eager: true,
      },
      customer: {
        eager: false,
      },
    },
  },
})
@Controller('cart-foods')
export class CartFoodController implements CrudController<CartFood> {
  constructor(public service: CartFoodService) {}

  @Post('add')
  async addCartFood(@Body() body: any) {
    try {
      return await this.service.addCartFood(body);
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  @Post('decrease')
  async decreaseCartFood(@Body() body: any) {
    try {
      return await this.service.decreaseCartFood(body);
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
}
