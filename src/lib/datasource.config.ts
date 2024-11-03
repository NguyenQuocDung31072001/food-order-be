import { DataSource, DataSourceOptions } from 'typeorm';
import { resolve } from 'path';
import databaseConfig from './database.config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { OrderFoodConfigModule } from 'src/shared/order-food-config/order-food-config.module';

OrderFoodConfigModule.forRoot();

const options = databaseConfig() as TypeOrmModuleOptions as DataSourceOptions;

export default new DataSource({
  ...options,
  migrations: [resolve(process.cwd(), 'migrations/*{.ts,.js}')],
  logging: false,
});
