// Import required modules
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'mysql-project-mysql_net',
  port: 8705, // <-- Added custom MySQL port
  user: 'customuser',
  password: 'custompassword',
  database: 'customdb'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send(`Application is up and running on port ${PORT}`);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

