const description = {
  demand: true, //Especifica si el comando requiere de parametros
  alias: 'd', // Alias de --description que seria -d
  desc: 'Descripción de la tarea por hacer'
}, completed = {
  default: true,
  alias: 'c', // Alias de --completed que seria -c
  desc: 'Cambia el estado de la tarea (completada o pendiente)'
}

//Definiendo comandos que yargs va a permitir a traves de cli
const argv = require('yargs')
  .command('create', 'Crea una tarea por hacer', { description })
  .command('read', 'Lee todas las tareas por hacer')
  .command('update', 'Actualiza el estado de una tarea', { description, completed })
  .command('delete', 'Borra una tarea de la lista', { description })
  .help()
  .argv 

module.exports = { argv }
