import { Food } from 'src/modules/food/entities/food.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Voucher extends BaseEntity {
  @Column()
  code: string;

  @Column()
  exp_date: Date;

  @OneToMany(() => Order, (order) => order.voucher)
  orders: Order[];
}
