const express = require('express');
const fab = require('./modules/fabricantes/fabricante');

const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.json({response: "HEHE Boy"})
});

module.exports = routes;