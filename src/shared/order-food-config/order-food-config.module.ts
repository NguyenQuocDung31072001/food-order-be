import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'src/lib/database.config';
import { OrderFoodConfigService } from './order-food-config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
      load: [databaseConfig],
    }),
  ],
})
export class OrderFoodConfigModule {
  static forRoot() {
    return {
      module: OrderFoodConfigModule,
      providers: [OrderFoodConfigService],
      exports: [OrderFoodConfigService],
    };
  }
}
