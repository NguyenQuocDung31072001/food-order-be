import { Food } from 'src/modules/food/entities/food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Categories extends BaseEntity {
  @Column()
  image: string;

  @Column()
  image_public_id: string;

  @Column()
  name: string;

  @OneToMany(() => Food, (food) => food.categories)
  foods: Food[];
}
