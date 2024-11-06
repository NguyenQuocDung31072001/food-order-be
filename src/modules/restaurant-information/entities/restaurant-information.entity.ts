import { BaseEntity } from 'src/shared/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class RestaurantInformation extends BaseEntity {
  @Column()
  image: string;

  @Column()
  image_public_id: string;

  @Column()
  site_name: string;

  @Column()
  copy_right: number;

  @Column()
  seo_title: string;

  @Column()
  seo_description: string;

  @Column()
  seo_keywords: string;
}
