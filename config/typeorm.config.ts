import { DataSource } from 'typeorm';
import { applicationConfig } from './index';

export default new DataSource({
  type: 'postgres',
  host: applicationConfig.db.host,
  port: parseInt(applicationConfig.db.port),
  username: applicationConfig.db.user,
  password: applicationConfig.db.password,
  database: applicationConfig.db.name,
  entities: ['src/**/**/*.entity.ts'],
  migrations: ['migrations/*{.ts,.js}'],
});
