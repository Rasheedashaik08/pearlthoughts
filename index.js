const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',     // Change according to your setup
  host: 'localhost',
  database: 'todo_db',
  password: 'yourpassword',
  port: 5432,
});

// CRUD for Tasks
app.post('/tasks', async (req, res) => {
  const { title, description, due_date, recurrence } = req.body;
  const result = await pool.query(
    `INSERT INTO tasks (title, description, due_date, recurrence) VALUES ($1, $2, $3, $4) RETURNING *`,
    [title, description, due_date, JSON.stringify(recurrence)]
  );
  res.json(result.rows[0]);
});

// Fetch tasks
app.get('/tasks', async (req, res) => {
  const result = await pool.query(`SELECT * FROM tasks`);
  res.json(result.rows);
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
