const express = require('express');
const fs = require('fs');
const path = require('path');

const menuFile = path.join('./src/server/data', 'menuSemanal.json');

// eslint-disable-next-line new-cap
const api = express.Router();

api.get('/menu', function(req, res) {
  try {
    const menuData = fs.readFileSync(menuFile);
    const menuSemanal = JSON.parse(menuData);
    res.status(200).send(menuSemanal);
  } catch (error) {
    res.status(500).send({message: 'Hubo un error interno en el servidor',
      error: '500'});
  }
});

api.put('/menu-edit', function(req, res) {
  const dataMenu = req.body;
  const menuEditado = JSON.stringify(dataMenu);
  try {
    fs.writeFileSync(menuFile, menuEditado);
  } catch (error) {
    res.status(500).send({message: 'Hubo un error interno en el servidor',
      error: '500'});
  }
});

module.exports = api;
