/**
 * Socket.IO
 * 1) Eventos connection y disconnect.
 * 2) Puedes crear tus propios eventos.
 * 3) emit(): cuando se comunica un mensaje a todos los clientes conectados.
 * 4) broadcast.emit(): cuando se comunica un mensaje a todos los clientes, excepto al que lo origina.
 * 5) Los 4 puntos anteriores funcionan en el servidor y en el cliente.
 */
const c = console.log,
  http = require('http').createServer(server),
  fs = require('fs'),
  io = require('socket.io')(http)

let connections = 0

function server(req, res) {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' })
      return res.end('<h1>Error Interno del Servidor</h1>')
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      return res.end(data, 'utf-8')
    }
  })
}

http.listen(3000, c('Servidor corriendo desde localhost:3000'))

io.on('connection', socket => {
  socket.emit('hello', { message: 'Hola Mundo con Socket.IO' })

  socket.on('otro evento que me invento', data => c(data))

  connections++

  c(`Conexiones activas: ${connections}`)

  socket.emit('connect users', { connections })
  socket.broadcast.emit('connect users', { connections })

  socket.on('disconnect', () => {
    connections--
    socket.broadcast.emit('connect users', { connections })
    c(`Conexiones activas: ${connections}`)
  })
})
