const express = require('express'),
  app = express()

app
  .get('/', (req, res) => {
    //res.end('<h1>Hola Mundo desde Express.js</h1>')
    res.send('<h1>Hola Mundo desde Express.js</h1>')
  })
  .get('/escuela-digital', (req, res) => {
    //res.send('<h1>HOla Escuela DIgital</h1>')(
    res.redirect(301, 'https://ed.team')
  })
  .get('/json', (req, res) => {
    res.json({
      name: 'Jonathan',
      age: 34,
      twitter: '@jonmircha'
    })
  })
  .get('/render', (req, res) => {
    //res.render(`${__dirname}/index.html`)
  })
  .listen(3000, () => console.log('Iniciando Express en el puerto 3000'))
