// Import the express module
const express = require('express');
const app = express();

// Define the port number
const PORT = 8592;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send(`Application is up and running on port ${PORT}`);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

