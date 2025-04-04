// backend/server.js
const express = require('express');
const app = express();
const pool = require('./db');
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
// Allow all origins
app.use(cors({
  origin: 'http://127.0.0.1:5500', // <-- VS Code Live Server origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
}));
// POST /api/posts - create a new post
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting post:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all blog posts
app.get('/api/posts', async (req, res) => {
  const result = await pool.query('SELECT * FROM posts ORDER BY id DESC');
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
