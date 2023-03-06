import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import api from './api';
import corsOptions from './config/cors-options';
import AppDataSource from './config/db-connection';
import notFound from './middleware/not-found';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.use('/api/v1', api);

app.use(notFound);

(async () => {
  await AppDataSource.initialize();
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})().catch((err) => console.log(err));
