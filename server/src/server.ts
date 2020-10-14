import express from 'express';

const app = express();

app.get('/users', (req, res, error) => {
  return res.json({ message: 'Works' });
});

app.listen(3010);
