import { Crud, CrudController } from '@dataui/crud';
import { Body, Controller, Delete, Post } from '@nestjs/common';
import { Food } from './entities/food.entity';
import { FoodService } from './food.service';
import { CloudinaryService } from '../cloudinary/cloudinary.services';

@Crud({
  model: {
    type: Food,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    exclude: ['id'],
    join: {
      imageFoods: {
        eager: true,
      },
      categories: {
        eager: true,
      },
      favoriteFoods: {
        eager: true,
      },
      ratingFoods: {
        eager: true,
      },
    },
  },
})
@Controller('foods')
export class FoodController implements CrudController<Food> {
  constructor(
    public service: FoodService,
    private cloudinaryService: CloudinaryService,
  ) {}

  @Post('delete-image-food')
  async deleteImageFood(@Body() body: any) {
    const { food_id, image_public_id } = body;
    try {
      await this.cloudinaryService.deleteFile(image_public_id);
      return this.service.deleteImageFood(food_id, image_public_id);
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
}
