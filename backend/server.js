// backend/server.js
const express = require('express');
const app = express();
const pool = require('./db');
const PORT = 3000;

app.use(express.json());

// Add new blog post
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  const result = await pool.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  res.json(result.rows[0]);
});

// Get all blog posts
app.get('/api/posts', async (req, res) => {
  const result = await pool.query('SELECT * FROM posts ORDER BY id DESC');
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
