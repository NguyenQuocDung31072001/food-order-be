import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default registerAs<TypeOrmModuleOptions>('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // entities: [resolve(process.cwd(), './**/**/*entity{.ts,.js}')],
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  autoLoadEntities: true,
  synchronize: false,
  logging: false,
  migrationsRun: true,
  migrations: [join(__dirname, '../../migrations/*{.ts,.js}')],
}));
