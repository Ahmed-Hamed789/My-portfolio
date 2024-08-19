// backend/index.js
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
