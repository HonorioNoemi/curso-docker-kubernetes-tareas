const express = require('express');
const os = require('os');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Endpoint principal
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi-app :)', uptime: process.uptime() });
});

// Endpoint secundario
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    pid: process.pid,
    platform: process.platform,
    hostname: os.hostname()
  });
});

// Endpoint POST
app.post('/echo', (req, res) => {
  res.json({ you_sent: req.body });
});

app.listen(PORT, () => {
  console.log(`mi-app escuchando en puerto ${PORT}`);
});
