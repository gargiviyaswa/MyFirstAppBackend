// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Dummy login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'test@demo.com' && password === '123456') {
    return res.json({ success: true, token: 'mock-token-123' });
  }

  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
