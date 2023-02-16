import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(() => {
  console.log(`Listening on port ${PORT}`);
});
