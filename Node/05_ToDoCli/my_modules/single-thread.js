const singleThread = () => {
  const c = console.log,
    p = process // Objeto proccess que mantiene todo el proceso de node

  //c(p)

  p.argv[2] = 'Estamos aprendiendo Node.js'
  p.argv[3] = 19
  p.argv[4] = null
  p.argv[5] = true

  c(p.argv)

  c('---------------------------------------------')
  c('         EL PROCESO DE NODE.JS         ')
  c(`Id del proceso ........... ${p.pid}`)
  c(`Título.................... ${p.title}`)
  c(`Directorio de Node........ ${p.execPath}`)
  c(`Directorio Actual......... ${p.cwd()}`)
  c(`Versión de Node........... ${p.version}`)
  c(`Versiones Dependencias.... ${p.versions}`)
  c(`Plataforma (S.O.)......... ${p.platform}`)
  c(`Arquitectura (S.O.)....... ${p.arch}`)
  c(`Tiempo activo de Node..... ${p.uptime()}`)
  c(`Argumentos del proceso.... ${p.argv}`)
  c('---------------------------------------------')

  let key = 0

  for (key in p.argv) {
    c(p.argv[key])
  }
}

module.exports = singleThread
