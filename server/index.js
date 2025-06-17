const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: '🫧 Bubble server is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at Port:${PORT}`);
});
