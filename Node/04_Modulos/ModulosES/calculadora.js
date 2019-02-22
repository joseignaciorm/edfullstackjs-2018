const sumar = (a, b) => a + b,
  restar = (a, b) => a - b,
  multiplicar = (a, b) => a * b,
  dividir = (a, b) => a / b,

  //Creamos un objeto global. Le pasamos parametro sumar con una funsión
  calculadora = {
    sumar:sumar,
    restar:restar,
    multiplicar,
    dividir
  }

//Para exportar calculadora como modulo
export default calculadora
