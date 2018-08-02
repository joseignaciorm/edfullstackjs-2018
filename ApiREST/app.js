const express = require('express'),
  config = require('./config'),
  app = express(),
  router = require('./router')

app
  .set('port', process.env.PORT)
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use('/api', router)

module.exports = app
