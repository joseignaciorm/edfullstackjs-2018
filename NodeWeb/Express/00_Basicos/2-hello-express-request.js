const express = require('express'),
  app = express()

app
  .get('/', (req, res) => res.end('<h1>Hola Mundo desde Express.js 😀</h1>'))
  .get('/users', (req, res) => {
    res
      .set({ 'content-type': 'text/html; charset=utf-8' })
      .end('<h1>Hola estas en la sección de usuarios 😀</h1>')
  })
  .get('/users/:id/:name/:age', (req, res) => {
    // /users/19-jonmircha-34
    res
      .set({ 'content-type': 'text/html; charset=utf-8' })
      .end(`
        <h1>Hola ${req.params.name}, bienvenid@ a Express.js 😀.</h1>
        <p>Tu id de usuario es <b>${req.params.id}</b>.</p>
        <p>Tu edad es ${req.params.age} años.</p>
      `)
  })
  .get('/search', (req, res) => {
    // /search?s=Una+búsqueda
    res
      .set({ 'content-type': 'text/html; charset=utf-8' })
      .end(`
        <h1>Bienvenid@ a Express.js 😀.</h1>
        <p>Los resultados de la búsqueda:  <mark>${req.query.s}</mark>.</p>
      `)
  })
  .listen(3000, () => console.log('Iniciando Express.js en el puerto 3000'))
