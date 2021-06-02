import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  return response.json({ message: 'Teum!' });
});

app.post('/', (_request, response) => {
  return response.json({ message: 'Usuario teum' });
});

app.listen(3333, () => console.log('Running at 3333'));
