import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantInformationController } from './restaurant-information.controller';
import { RestaurantInformationService } from './restaurant-information.service';
import { RestaurantInformation } from './entities/restaurant-information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantInformation])],
  controllers: [RestaurantInformationController],
  providers: [RestaurantInformationService],
  exports: [RestaurantInformationService],
})
export class RestaurantInformationModule {}
