import { BaseEntity } from 'src/shared/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BillingInformation } from './billing-information.entity';
import { PaymentMethod } from 'src/modules/payment-method/entities/payment-method.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Voucher } from 'src/modules/voucher/entities/voucher.entity';
import { OrderFood } from 'src/modules/order-food/entities/order-food.entity';
import { OrderStatus } from 'src/shared/enums/order.enum';

@Entity()
export class Order extends BaseEntity {
  @Column({ nullable: false })
  @Generated('increment')
  order_number: number;

  @Column()
  total_charge: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
    name: 'place_on',
  })
  place_on: Date;

  @Column({ nullable: true, default: OrderStatus.ON_HOLD })
  status: OrderStatus;

  @ManyToOne(() => Customer, (customer) => customer.orders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
  @Column({ nullable: true })
  customer_id: string;

  @OneToOne(
    () => BillingInformation,
    (billingInformation) => billingInformation.order,
  )
  @JoinColumn({ name: 'billing_information_id' })
  billingInformation: BillingInformation;
  @Column({ nullable: true })
  billing_information_id: string;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.orders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethod;
  @Column({ nullable: true })
  payment_method_id: string;

  @ManyToOne(() => Voucher, (voucher) => voucher.orders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'voucher_id' })
  voucher: Voucher;
  @Column({ nullable: true })
  voucher_id: string;

  @OneToMany(() => OrderFood, (orderFood) => orderFood.order, { cascade: true })
  orderFoods: OrderFood[];
}
