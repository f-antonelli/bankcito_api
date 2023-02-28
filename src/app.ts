import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import corsOptions from './config/cors-options';
import notFound from './middleware/not-found';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use(notFound);

app.listen(() => {
  console.log(`Listening on port ${PORT}`);
});
