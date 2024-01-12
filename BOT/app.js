const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Мое простое API-приложение!');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Данные из моего API!',
    timestamp: new Date()
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
