// backend/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',        // IMPORTANT: This matches the Docker service name
  database: 'blogdb',
  password: 'password',
  port: 5432,
});

module.exports = pool;
// This code connects to a PostgreSQL database using the pg library.
// It creates a new Pool instance with the database connection details.