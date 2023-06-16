const express = require('express');

const menuRoute = require('./routes/menuRoute');

const app = express();

const PORT = 3000;

app.get('/', function(req, res) {
  res.send('Hello Word');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.use('/api', menuRoute);
