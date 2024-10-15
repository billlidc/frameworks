const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and enable CORS
app.use(express.json());
const cors = require('cors');
app.use(cors());

// A simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
