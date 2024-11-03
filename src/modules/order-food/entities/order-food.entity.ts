import { Food } from 'src/modules/food/entities/food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Order } from 'src/modules/order/entities/order.entity';

@Entity()
export class OrderFood extends BaseEntity {
  @ManyToOne(() => Order, (order) => order.orderFoods)
  order: Order;
  @Column({ nullable: true })
  order_id: string;

  @ManyToOne(() => Food, (food) => food.orderFoods)
  food: Food;
  @Column({ nullable: true })
  food_id: string;

  @Column()
  quantity: number;
}
