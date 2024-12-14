import { Crud, CrudController, Override } from '@dataui/crud';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';
import { OrderCreateDto } from './dto/order-create.dto';
import { BillingInformationService } from './billing-information.service';
import { CartFoodService } from '../cart-food/cart-food.service';
import { OrderStatus } from 'src/shared/enums/order.enum';
import { OrderFoodService } from '../order-food/order-food.service';
import { FoodService } from '../food/food.service';

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
  constructor(
    public service: OrderService,
    public billingService: BillingInformationService,
    public foodService: FoodService,
    public cartFoodService: CartFoodService,
    public foodOrderService: OrderFoodService,
  ) {}

  @Override('createOneBase')
  async createOrder(@Body() body: OrderCreateDto) {
    try {
      const {
        carts,
        customer_id,
        payment_method_id,
        voucher_id,
        ...billingInformation
      } = body ?? {};

      const newBillingInformation = await this.billingService.customCreateOne(
        billingInformation,
      );
      const cartFoods = await this.cartFoodService.customGetManyByIds(carts);
      console.log('cartFoods ', cartFoods);

      const total_charge = cartFoods.reduce((acc, cartFood) => {
        return acc + cartFood.quantity * cartFood.food.price;
      }, 0);
      console.log('total_charge ', total_charge);

      const newOrder = await this.service.createOrder({
        customer_id,
        payment_method_id,
        billing_information_id: newBillingInformation.id,
        status: OrderStatus.ON_HOLD,
        total_charge: total_charge,
      });
      console.log('newOrder ', newOrder);

      for (const cartFood of cartFoods) {
        await this.foodService.reduceQuantity(
          cartFood.food_id,
          cartFood.quantity,
        );
        await this.foodOrderService.createMultipleRecord({
          order_id: newOrder.id,
          food_id: cartFood.food_id,
          quantity: cartFood.quantity,
        });
      }

      await this.cartFoodService.deleteRecordByIds(carts);

      return newOrder;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
