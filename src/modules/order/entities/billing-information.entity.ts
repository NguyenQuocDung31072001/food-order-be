import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, OneToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class BillingInformation extends BaseEntity {
  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  company_name: string;

  @Column()
  province: string;

  @Column()
  ward: string;

  @Column()
  detail_address: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column({ nullable: true })
  order_notes: string;

  @OneToOne(() => Order, (order) => order.billingInformation)
  order: Order;
  @Column({ nullable: true })
  order_id: string;
}
