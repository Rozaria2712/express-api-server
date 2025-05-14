require('dotenv').config(); // Загружаем переменные из .env

const express = require('express');
const { Client } = require('pg');

const app = express();
app.use(express.json());

// Настраиваем подключение к базе
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Подключаемся
client.connect()
  .then(() => console.log('✅ Подключено к базе данных'))
  .catch(err => console.error('❌ Ошибка подключения к БД', err.stack));

// Пример API
app.get('/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Ошибка получения данных');
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});
