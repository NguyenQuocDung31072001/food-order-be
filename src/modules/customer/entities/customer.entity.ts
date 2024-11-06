import { CartFood } from 'src/modules/cart-food/entities/cart-food.entity';
import { CustomerFavoriteFood } from 'src/modules/customer-favorite-food/entities/customer-favorite-food.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { RatingFood } from 'src/modules/rating-food/entities/rating-food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  avatar: string;

  @Column()
  avatar_public_id: string;

  @Column()
  date_of_birth: string;

  @Column()
  recent_address: string;

  @Column()
  permanent_address: string;

  @Column()
  city: string;

  @Column()
  postal_code: string;

  @Column()
  country: string;

  @OneToMany(() => RatingFood, (ratingFood) => ratingFood.customer)
  ratingFoods: RatingFood[];

  @OneToMany(
    () => CustomerFavoriteFood,
    (customerFavoriteFood) => customerFavoriteFood.customer,
  )
  favoriteFoods: CustomerFavoriteFood[];

  @OneToMany(() => CartFood, (cartFood) => cartFood.customer)
  cartFoods: CartFood[];

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
