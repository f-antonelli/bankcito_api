import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [],
});

export default AppDataSource;
