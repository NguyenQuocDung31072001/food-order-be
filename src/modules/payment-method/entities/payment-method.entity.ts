import { Order } from 'src/modules/order/entities/order.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class PaymentMethod extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Order, (order) => order.paymentMethod, { cascade: true })
  orders: Order[];
}
