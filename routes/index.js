const express = require('express');
const route = express.Router();
const controller = require('../controller')

route.get('/',controller.index)
route.get('/:id', controller.detMenu)

module.exports = route