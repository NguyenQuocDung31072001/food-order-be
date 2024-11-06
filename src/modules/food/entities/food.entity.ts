import { CartFood } from 'src/modules/cart-food/entities/cart-food.entity';
import { Categories } from 'src/modules/categories/entities/categories.entity';
import { CustomerFavoriteFood } from 'src/modules/customer-favorite-food/entities/customer-favorite-food.entity';
import { ImageFood } from 'src/modules/image-food/entities/image-food.entity';
import { OrderFood } from 'src/modules/order-food/entities/order-food.entity';
import { RatingFood } from 'src/modules/rating-food/entities/rating-food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Food extends BaseEntity {
  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column({ nullable: true, default: 0 })
  number_of_order: number;

  @Column({ nullable: true, default: 0 })
  number_of_favorite: number;

  @Column({ nullable: true, default: false })
  disabled: boolean;

  @ManyToOne(() => Categories, (categories) => categories.foods)
  categories: Categories;
  @Column({ nullable: true })
  categories_id: string;

  @OneToMany(() => ImageFood, (imageFood) => imageFood.food)
  imageFoods: ImageFood[];

  @OneToMany(() => RatingFood, (ratingFood) => ratingFood.food)
  ratingFoods: RatingFood[];

  @OneToMany(
    () => CustomerFavoriteFood,
    (customerFavoriteFood) => customerFavoriteFood.food,
  )
  favoriteFoods: CustomerFavoriteFood[];

  @OneToMany(() => CartFood, (cartFood) => cartFood.food)
  cartFoods: CartFood[];

  @OneToMany(() => OrderFood, (orderFood) => orderFood.food)
  orderFoods: OrderFood[];
}
