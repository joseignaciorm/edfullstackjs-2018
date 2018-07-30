# API REST

## ¿Qué es una API REST?

Digamos que estás tratando de encontrar videos sobre Batman en Youtube.

Abres Youtube, escribe "Batman" en un campo de búsqueda, pulsas enter, y verás una lista de videos sobre Batman.

Una _**API REST**_ funciona de manera similar. Buscas algo y obtienes una lista de resultados del servicio que está solicitando.

Una _**API**_ es una _**Interfaz de Programación de Aplicaciones**_.

Es un conjunto de reglas que permiten que los programas se comuniquen entre sí. El desarrollador crea la API en el servidor y permite que el cliente hable con ella.

_**REST**_  significa "_**Transferencia de Estado Representacional**_".

Es un conjunto de reglas que los desarrolladores siguen cuando crean un API. Una de estas reglas establece que se debe poder obtener un dato al que se le llama _**recurso**_  cuando se vincula a una URL específica.

Cada URLs a la que se puede acceder  se denomina una  _**petición**_ mientras que los datos que regresan son la _**respuesta**_ a dicha petición.

## Anatomía de una petición

Una petición se compone de cuatro elementos:

1. Punto final o Ruta ( _**endpoint / route**_ ).
1. Método ( _**method**_ ).
1. Cabeceras ( _**headers**_ ).
1. Datos o Cuerpo ( _**data / body**_ ).

### Ruta

La ruta es la url que la API solicita.

Por ejemplo, la ruta del API de GitHub sería:

```
https://api.github.com/
```

La ruta determina el recurso que se está solicitando. Piensa en ello como un contestadora automática que te pide que presiones 1 para una opción, 2 para otro servicio, 3 para hablar con un operador y así sucesivamente.

Puede acceder a las rutas al igual que puede vincular a partes de un sitio web.

Por ejemplo, en un sitio hecho en WordPress, para obtener una lista de todas las publicaciones etiquetadas con alguna palabra por ejemplo "JavaScript" en Smashing Magazine, se navega así:

```
https://css-tricks.com/tag/javascript/
```

Donde `https://css-tricks.com/` es el _**endpoint**_  y `/tag/javascript` es el _**path**_ de la ruta.

En un API para comprender qué rutas hay disponibles es necesario consultar la documentación.

Por ejemplo, para obtener una lista de repositorios de cierto usuario a través de la [API de GitHub](https://developer.github.com/v3/). La documentación indica lo siguiente:

```
/users/:username/repos
```

Cualquier signo de dos puntos '**`:`**' en una ruta denota una variable. Se debe reemplazar esta variable con los valores reales cuando se envía una petición. Por ejemplo:

```
https://api.github.com/users/jonmircha/repos
```

#### Parámetros de Consulta

La parte final de una ruta se le denomina parámetros de consulta ( _**query parameters**_ ).

Técnicamente, los parámetros de consulta no son parte de la arquitectura _**REST**_, pero muchas API los usan, ya que dan la opción de modificar una petición con pares de _**clave=valor**_.

Siempre comienzan con un signo de interrogación '**?**'. Cada juego de clave=valor se separan con un signo de _**ampersand**_ '**&**'. Por ejemplo:

```
?query1=value1&query2=value2
```

Regresando al ejemplo del API de GitHub, cuando se intenta obtener una lista de los repositorios de un usuario, se pueden agregar tres posibles parámetros para modificar los resultados de una petición, como lo indica la [documentación](https://developer.github.com/v3/repos/#list-user-repositories):

1. `type`
1. `sort`
1. `direction`

Por ejemplo, si se desea obtener una lista de los repositorios que un usuario empuja ( **`push`** ) la petición sería así:

```
https://api.github.com/users/jonmircha/repos?sort=pushed
````

#### JSON

Todos los lenguajes de programación pueden enviar peticiones a APIs, por ejemplo en JavaScript se puede usar _**AJAX**_ o _**Fetch**_.

La manera en como devuelven los datos las APIs es en _**JSON**_ ( _**JavaScript Object Notation**_ ) un formato común para enviar y recibir datos a través de una API REST.

La respuesta que la API de GitHub devuelve es JSON.

Un objeto JSON se parece a un objeto JavaScript. En JSON, cada propiedad y valor debe estar entre comillas dobles, como este ejemplo:

```json
{
  "propiedad1": "valor1",
  "propiedad2": "valor2",
  "propiedad3": "valor3"
}
```

### Método

El método es el tipo de petición que se envía al servidor de la API. Los métodos más utilizados son:

* _**GET**_
* _**POST**_
* _**PUT**_
* _**DELETE**_

Estos métodos proporcionan un significado para la petición que se está realizando y  se utilizan para realizar las cuatro acciones posibles a un modelo de datos, mejor conocido como _**CRUD**_: _**Create**_, _**Read:**, _**Update**_ y _**Delete**_.

| Método | Significado |
| -- | -- |
| _**GET**_ |	Esta petición se usa para obtener un recurso de un servidor. Si se realiza una petición `GET`, el servidor busca los datos que se han solicitado y se los envía de vuelta. En otras palabras, una petición `GET` realiza una operación` READ`. Este es el método de petición predeterminado. |
| _**POST**_ | Esta petición se usa para crear un nuevo recurso en un servidor. Si se realiza una petición `POST`, el servidor crea una nueva entrada en la base de datos y le dice si la creación es exitosa. En otras palabras, una petición `POST` realiza una operación` CREATE`. |
| _**PUT**_ | Estas dos peticiones se utilizan para actualizar un recurso en un servidor. Si se realiza una petición `PUT`, el servidor actualiza una entrada en la base de datos y le informa si la actualización fue exitosa. En otras palabras, una petición `PUT` realiza una operación `UPDATE`. |
| _**DELETE**_ | Esta petición se usa para eliminar un recurso de un servidor. Si se realiza una petición `DELETE`, el servidor borra una entrada en la base de datos y le dice si la eliminación fue exitosa. En otras palabras, una petición `DELETE` realiza una operación` DELETE`. |

Las APIs deben saber qué método usa cada petición. Regresando a nuestro ejemplo de GitHub, para obtener una lista de los repositorios de un usuario, se necesita una petición `GET`:

```
GET /users/:username/repos
```

Con el API [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch) de JavaScript nuestro ejemplo al API REST de GitHub quedaría así:

```js
let route = 'https://api.github.com/users/jonmircha/repos',
  options = { method: 'GET' }

fetch(route, options)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```
Para crear un nuevo repositorio GitHub, se necesita hacer una petición `POST`, con Fetch y JavaScript sería:

```js
let route = 'https://api.github.com/user/repos',
  options = { method: 'POST' }

fetch(route, options)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

Al ejecutar esta petición. Se obtendrá una respuesta que indica que se requiere autenticación:

```js
Response {
  body: ReadableStream,
  bodyUsed: false,
  headers: Headers {},
  ok: false,
  redirected: false,
  status: 401,
  statusText: "Unauthorized",
  type: "cors",
  url: "https://api.github.com/user/repos"
}
```

### Cabeceras

Las cabeceras se utilizan para proporcionar información tanto al cliente como al servidor. Se pueden utilizar para muchos fines, como la autenticación y la información sobre el contenido del cuerpo de la petición.

La lista de cabeceras válidas se puede consultar en la Referencia [HTTP headers](https://developer.mozilla.org/es/docs/Web/HTTP/Headers) de MDN.

Las cabeceras HTTP son pares de clave-valor que están separados por dos puntos. El siguiente ejemplo muestra una cabecera que le dice al servidor que espera contenido JSON.

```json
{
  "Content-Type": "application/json"
}
```

Regresando al ejemplo de GitHub, podemos mandar una cabecera con Fetch de la siguiente manera:

```js
let route = 'https://api.github.com/',
  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

fetch(route, options)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

### Datos

Los datos ( a veces llamados _cuerpo_ o _mensaje_ ) contienen información que se desea enviar al servidor. Esta opción sólo se utiliza con peticiones `POST`, `PUT` o `DELETE`.

Regresando al ejemplo del API de GitHub, podemos mandar datos de la siguiente manera:

```js
let route = 'https://api.github.com/user/repos',
  data = { login: 'jonmircha' },
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

fetch(route, options)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

## Códigos de estado de HTTP

Algunos de los mensajes recibidos anteriormente, como "_**Unauthorized**_" u "_**OK**_" son mensajes del servidor, mejor conocidos como códigos de estado HTTP que permiten decir el estado de la respuesta. El rango de valores van de  100+ a 500+.

| Código | Significado |
| -- | -- |
| 100+ | Respuestas informativas |
| 200+ | Peticiones correctas |
| 300+ | Redirecciones |
| 400+ | Errores del cliente |
| 500+ | Errores de servidor |

Para más información consulta la [Referencia de estado HTTP de MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status).





https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/



## Curso IV: Crea una API RESTful con Node.js

### Clase 1

* Introducción a las API RESTful
  * API
  * REST
* JSON
* API Fetch
* Anatomía de una petición
  * Rutas
  * Métodos
  * Cabeceras
  * Datos
 * Códigos de estado de HTTP
 * Modelando nuestra API RESTful





* Introducción a las API RESTful
  * Peticiones HTTP - GET - PUT - POST - DELETE
  * Códigos de respuestas HTTP
* Creando el servidor del API
  * Configuración de Express
  * Usando códigos de respuesta HTTP en Express
  * Creando un archivo de configuración global

### Clase 2

* Creando el modelo del API
  * Conexión a MongoDB
  * Configuración de Mongoose
* Cliente RESTful
  * Modelos
  * Controladores
  * Rutas

### Clase 3

* Peticiones HTTP del API
  * Acción para guardar
  * Listar documentos
  * Devolver un documento
  * Actualizar documentos
  * Borrar documentos

### Clase 4

* Probando el API RESTful en local con Postman
* Desplegando el API RESTful en Producción


_id
name
country
location
altitude
race_web
race_logo
race_since
race_day
race_date
race_type
distance
resume


FETCH

* https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
* http://www.etnassoft.com/2016/10/10/estudiando-la-nueva-api-fetch-la-evolucion-natural-de-xhr-en-el-nuevo-javascript/
* https://davidwalsh.name/fetch
* https://css-tricks.com/using-fetch/ - fetch
* https://desarrolloweb.com/articulos/fetch-post-ajax-javascript.html - fetch
* https://mxb.at/blog/offline-forms/ - revisar para envío de formulario




