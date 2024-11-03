import { BaseEntity } from 'src/shared/entities';
import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BillingInformation } from './billing-information.entity';
import { PaymentMethod } from 'src/modules/payment-method/entities/payment-method.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Voucher } from 'src/modules/voucher/entities/voucher.entity';
import { OrderFood } from 'src/modules/order-food/entities/order-food.entity';

enum OrderStatus {
  COMPLETED = 'COMPLETED',
  PROCESSING = 'PROCESSING',
  REJECTED = 'REJECTED',
  ON_HOLD = 'ON_HOLD',
  IN_TRANSIT = 'IN_TRANSIT',
}

@Entity()
export class Order extends BaseEntity {
  @Column({ nullable: false })
  @Generated('increment')
  order_number: number;

  @Column()
  total_charge: number;

  @Column()
  place_on: Date;

  @Column({ default: OrderStatus.ON_HOLD })
  status: OrderStatus;

  @Column()
  address: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
  @Column({ nullable: true })
  customer_id: string;

  @OneToOne(
    () => BillingInformation,
    (billingInformation) => billingInformation.order,
  )
  billingInformation: BillingInformation;
  @Column({ nullable: true })
  billing_information_id: string;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.orders)
  paymentMethod: PaymentMethod;
  @Column({ nullable: true })
  payment_method_id: string;

  @ManyToOne(() => Voucher, (voucher) => voucher.orders)
  voucher: Voucher;
  @Column({ nullable: true })
  voucher_id: string;

  @OneToMany(() => OrderFood, (orderFood) => orderFood.order)
  orderFoods: OrderFood[];
}
