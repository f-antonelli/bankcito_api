import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import Account from '../database/Account';
import Card from '../database/Card';
import Movements from '../database/Movements';
import Transfers from '../database/Transfers';
import User from '../database/User';
import UserData from '../database/UserData';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [User, UserData, Card, Transfers, Account, Movements],
});

export default AppDataSource;
