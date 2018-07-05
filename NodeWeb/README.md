#  Node.js en la web

## [Express.js](http://expressjs.com/)

### ¿Qué es?

> Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.<br><br>
> Con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la creación de una API sólida es rápida y sencilla.<br><br>
>Express proporciona una delgada capa de características de aplicación web básicas, que no ocultan las características de Node.js que tanto ama y conoce.

* [Express.js en español](http://expressjs.com/es)
* [Documentación](http://expressjs.com/en/4x/api.html)
* Express API:
  * [Express](http://expressjs.com/4x/api.html#express)
  * [Application](http://expressjs.com/4x/api.html#app)
  * [Require](http://expressjs.com/4x/api.html#req)
  * [Response](http://expressjs.com/4x/api.html#res)
  * [Router](http://expressjs.com/4x/api.html#router)
* [Generador de Express](http://expressjs.com/en/starter/generator.html)

#### Características

* Estrictamente web (microframework).
* Sencillo, flexible y minimalista.
* Muy popular.
* Se adapta muy bien a la filosofía de Node.
* Similar a Sinatra, Sylex, Flask, Spark, etc.

#### Útil para:

* Rutas.
* Parámetros.
* Formularios.
* Subida de ficheros.
* Cookies.
* Sesiones.
* Templates.

#### NO es útil para:

* Base de datos / ORM.
* Autenticación de usuarios.
* Seguridad.
* Migraciones.
* Deployment.
* Testing.
* Organización del código.

#### CONCRETAMENTE:

* Construye sobre `http`.
* Procesa la petición a través middlewares.
* Asocia rutas a manejadores.
* Procesa los objetos de petición y respuesta.
* Visualiza templates.
* Nosotros escogemos qué middlewares queremos usar, y en qué orden.

#### Frameworks inspirados o basados en Express:

* [Koa](https://koajs.com/)
* [Hapi](https://hapijs.com/)
* [Kraken](http://krakenjs.com/)
* [Sails](https://sailsjs.com/)
* [Adonis](https://adonisjs.com/)
* [Total](https://www.totaljs.com/)
* [Locomotive](http://www.locomotivejs.org/)
* [Geddy](http://geddyjs.org/)

### Middlewares

Express.js se ayuda de paquetes adicionales, para mantener su core simple y minimalista: los _[Middlewares](http://expressjs.com/en/guide/using-middleware.html)_.

Son módulos _**plug and play**_ que se pueden apilar arbitrariamente en cualquier orden y proveen cierta funcionalidad.

Hay de dos tipos:

1. **Filtros**: procesan tráfico entrante/saliente, pero no responden a ninguna petición. Por ejemplo `bodyParser`.
1. **Proveedores**: ofrecen respuestas automáticas a algún tipo de petición. Por ejemplo `static`.

Escribir middlewares para express es muy sencillo:

* Una función que recibe 3 parámetros: `req`, `res`, `next`.
* Al terminar su tarea, tiene que invocar a `next()`:
  * **Sin parámetro**: se invoca al siguiente middleware del stack.
  * **Con parámetro**: se cambia la ruta a lo que se pase como parámetro.
* Dos maneras de activar middlewares:
  1. **Globalmente**, activos para toda la app.
  1. **Locales**. para ciertas rutas.

### Templates Engines

Express tiene un mecanismo para renderizar plantillas que es:

* Agnóstico
* Modular
* Simple

Templates compatibles con Express:

* [Jade](http://jade-lang.com/)
* [Pug](https://pugjs.org/)
* [EJS](http://ejs.co/)
* [Handlebars](http://handlebarsjs.com/)
* [Hogan.js](http://twitter.github.io/hogan.js/)
* [Dust](http://www.dustjs.com/)
* [Twig.js](https://github.com/twigjs/twig.js)
* [Vash](https://github.com/kirbysayshi/vash)

## [Socket.IO](https://socket.io/)

### ¿Qué es?

* Una librería para manipular websockets.
* Muy popular.
* Fallback para navegadores obsoletos.
* Muy fácil de usar.
* Servidor / Cliente.
* [API Docs](https://socket.io/docs/).

### ¿Qué son los [WebSockets](https://www.websocket.org/)?

* Protocolo de comunicación.
* Full-duplex.
* Una sola conexión permanente.
* Stream de mensajes.
* Contenido en tiempo real.
* El cliente puede enviar y recibir datos en tiempo real.
* Orientado a eventos (mensajes).
* Siempre conectado.
* Baja latencia.
* Son fundamentales, para:
  * Aplicaciones colaborativas.
  * Juegos multijugador.
  * Envío de datos.
  * Cargar recursos.
* En resumen: "tiempo real" en vez de "a petición".
