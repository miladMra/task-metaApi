const express = require('express');
const weatherRouter = express.Router();
const weatherController = require('./controller');

weatherRouter.get('/weather/:city',weatherController.getCity)
weatherRouter.get('/weather/cityId/:wid',weatherController.getWeather)

module.exports = weatherRouter
