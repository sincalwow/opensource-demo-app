
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.json({
    project: 'Cloud Ready Open Source App',
    status: 'running',
    uptime: process.uptime()
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Example API
app.get('/api/info', (req, res) => {
  res.json({
    name: 'cloud-ready-opensource-app',
    version: '1.1.0',
    description: 'Demo API for cloud compute programs'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
