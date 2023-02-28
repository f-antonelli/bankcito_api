import { CorsOptions } from 'cors';

import allowedOrigins from './allowed-origins';

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
