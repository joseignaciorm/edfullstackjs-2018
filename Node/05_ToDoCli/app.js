//const singleThread = require('./my_modules/single-thread')
//singleThread()

const colors = require('colors'),
  c = console.log,
  todoCli = require('./my_modules/todo-comands').argv,
  todoList = require('./my_modules/todo-list')

let toDoCommand = todoCli._[0]

switch (toDoCommand) {
  case 'create':
    let todo = todoList.create(todoCli.description)
    c(todo.blue)
    break;

  case 'read':
    let todos = todoList.read()

    for (let todo of todos) {
      if (todo.completed) {
        c(colors.green('☑️', todo.description))
      } else {
        c(colors.red('🗷', todo.description))
      }
    }
    break;
  case 'update':
    let updtated = todoList.update(todoCli.description, todoCli.completed)
    c(updtated.blue)
    break;

  case 'delete':
    let deleted = todoList.del(todoCli.description)
    c(deleted.blue)
    break;

  default:
    c('Comando no reconocido, ejecuta la opción --help para mostrar ayuda'.rainbow)
    break;
}
