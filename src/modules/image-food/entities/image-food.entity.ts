import { Food } from 'src/modules/food/entities/food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class ImageFood extends BaseEntity {
  @Column()
  image: string;

  @ManyToOne(() => Food, (food) => food.imageFoods)
  food: Food;
  @Column({ nullable: true })
  food_id: string;
}
