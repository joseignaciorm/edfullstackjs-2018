//Para llamar al módulo, declaramos variable calculadora
const calculadora = require('./calculadora'),
  c = console.log

c(`Suma: ${calculadora.sumar(4, 2)}`)
c(`Resta: ${calculadora.restar(4, 2)}`)
c(`Multiplicación: ${calculadora.multiplicar(4, 2)}`)
c(`División: ${calculadora.dividir(4, 2)}`)
