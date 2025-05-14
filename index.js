const express = require('express');
const app = express();
const port = 3000;

// Пример данных пользователей
const users = [
  { id: 1, name: 'Иван', email: 'ivan@example.com' },
  { id: 2, name: 'Мария', email: 'maria@example.com' },
  { id: 3, name: 'Павел', email: 'pavel@example.com' }
];

// Маршрут GET /
app.get('/', (req, res) => {
  res.send('Добро пожаловать в API');
});

// Маршрут GET /users — список пользователей
app.get('/users', (req, res) => {
  res.json(users);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
