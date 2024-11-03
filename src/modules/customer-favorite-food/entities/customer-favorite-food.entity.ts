import { Food } from 'src/modules/food/entities/food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Customer } from 'src/modules/customer/entities/customer.entity';

@Entity()
export class CustomerFavoriteFood extends BaseEntity {
  @ManyToOne(() => Food, (food) => food.favoriteFoods)
  food: Food;
  @Column({ nullable: true })
  food_id: string;

  @ManyToOne(() => Customer, (customer) => customer.favoriteFoods)
  customer: Customer;
  @Column({ nullable: true })
  customer_id: string;
}
