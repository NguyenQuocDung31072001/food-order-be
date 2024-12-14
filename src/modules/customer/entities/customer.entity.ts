import { CartFood } from 'src/modules/cart-food/entities/cart-food.entity';
import { CustomerFavoriteFood } from 'src/modules/customer-favorite-food/entities/customer-favorite-food.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { RatingFood } from 'src/modules/rating-food/entities/rating-food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
  @Column({ default: 'customer' })
  role: 'admin' | 'customer';

  @Column({ nullable: true })
  fullname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  avatar_public_id: string;

  @Column({ nullable: true })
  date_of_birth: string;

  @Column({ nullable: true })
  recent_address: string;

  @Column({ nullable: true })
  permanent_address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  country: string;

  @OneToMany(() => RatingFood, (ratingFood) => ratingFood.customer, {
    cascade: true,
  })
  ratingFoods: RatingFood[];

  @OneToMany(
    () => CustomerFavoriteFood,
    (customerFavoriteFood) => customerFavoriteFood.customer,
    {
      cascade: true,
    },
  )
  favoriteFoods: CustomerFavoriteFood[];

  @OneToMany(() => CartFood, (cartFood) => cartFood.customer, {
    cascade: true,
  })
  cartFoods: CartFood[];

  @OneToMany(() => Order, (order) => order.customer, {
    cascade: true,
  })
  orders: Order[];
}
