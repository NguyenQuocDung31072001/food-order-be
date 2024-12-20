import { Food } from 'src/modules/food/entities/food.entity';
import { BaseEntity } from 'src/shared/entities';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class ImageFood extends BaseEntity {
  @Column()
  image: string;

  @Column()
  image_public_id: string;

  @ManyToOne(() => Food, (food) => food.imageFoods, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'food_id' })
  food: Food;
  @Column({ nullable: true })
  food_id: string;
}
