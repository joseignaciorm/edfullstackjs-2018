# Repositorio de la Especialidad en Programación Fullstack con JavaScript de EDteam 2018 impartido por @jonmircha

[Ir a la Especialidad](https://ed.team/especialidades/js-fullstack)

![Especialidad en Programación Fullstack con JavaScript](https://ed.team/sites/default/files/2018-06/fullstack-js.jpg)

## Temario de la Especialidad:

### 1) Node.js Desde Cero

#### Clase 1:

* ¿Qué es Node.js?
* Instalación
  * Tipos de Versiones
    * Stand Alone
    * Node Version Manager
      * NVM para Windows => https://github.com/coreybutler/nvm-windows 
      * 
  * Tipos de Instalación
* Introducción a Node
  * Hola Mundo
  * Ciclo de eventos
  * Ciclo de vida de un proceso
  * Blocking vs Non Blocking I/O

#### Clase 2:

* Asincronía
  Mecanismos Asíncronos en Java Script:
  * Callbacks: Función que se ejecuta en segundo plano
  * Promesas: Evitan el codigo en cascada (Callbacks). Las 
    * promesas devuelven un objeto y en ese objeto recibe dos parámetros
    * (El ojeto que resuelve, o el objeto que la rechaza)
  * Async/Await: 
* NPM Node Package Manage => https://docs.npmjs.com/
  * Paquetes en Node (Hay dos paquetes)
  * Tipos de Paquetes
  * Proyectos en Node
  * El archivo package.json: Se definen todos los elementos que forman parte del        * proyecto.
  * Tipos de instalaciones
    * Dependencia de proyecto: Son todas aquellas librerias, modulos que requieren el   * proyecto para funcionar.
    * Dependencia de desarrollo: Sirven para la fase de desarrollo, como libreria de    * sas, etc. No se usan en fase de producción sino, en fase de desarrollo.
    * dependencia global: Son las que se van a instalar en el equipo de computo. Las    * que permitan ejecutar comandos desde la terminal para nuestro proyecto.( node   * sass, babel, gestores de tarea, empaquetadores (webpack, etc... ))
    
* Paquetes y Módulos
  * Requerir paquetes y archivos
  * Creación de módulos
  * Scripts NPM

#### Clase 3:

* Node y la línea de comandos
  * Interactuando con la CLI
  * Recibir parámetros por línea de comandos
  * Lectura y escritura de archivos

#### Clase 4:

* Node y APIs Externas
  * Peticiones HTTP desde la CLI
  * Peticiones Asíncronas desde la CLI
  * Consumo de APIs y Servicios desde la CLI
* Node y la Web
  * Módulo HTTP
  * Peticiones y métodos HTTP
  * Servidor Web
  * Cliente HTTP

### 2) Express.js y Socket.IO

#### Clase 1:

* Express.js Básico
  * Hola Mundo
  * Uso Básico
  * Rutas y Parámetros
  * Peticiones y Respuestas
  * Generador de Express.js

#### Clase 2:

* Express.js Avanzado
  * Configuración Personalizada
  * Servir contenido Estático
  * Template Engines (Handlebars)
  * Middlewares
  * Sesiones

#### Clase 3:

* Socket.IO
  * Introducción a los sockets
  * Configuración
  * Detección de conexiones
  * Emisión de mensajes

#### Clase 4:

* Creación de Chat
  * Configuración de Express.js
  * Configuración de Socket.IO
  * Programación Backend
  * Programación Frontend
  * Emisión de Eventos entre Clientes y Servidor

### 3) MongoDB

#### Clase 1:

* Introducción a MongoDB
* Diferencias entre Bases de Datos SQL y NoSQL
* Características de MongoDB
* Instalación de MongoDB
* Instalación de Robo3T
* Configuración y Conexión a MongoDB

#### Clase 2:

* Bases de datos y Colecciones
  * Crear
  * Listar
  * Eliminar
* CRUD en Documentos
  * Insertar
  * Buscar
    * feo
    * bonito
  * Eliminar
  * Editar
    * sin operadores
    * con $set
    * con $unset
    * con $push
    * con $pull
    * con $inc
    * con $rename
    * masivamente

#### Clase 3:

* Ordenamiento de documentos
* Contar documentos
* Consultas con expresiones regulares
* Consultas con notación de punto
* Operadores de comparación
  * $gt
  * $gte
  * $lt
  * $lte
  * $eq
  * $ne
  * $in
  * $nin
  * between
  * combinados
* Operadores lógicos
  * $not
  * $nor
  * $or
  * $and
* Otros
  * $type
  * $exists
  * hex_md5()
  * $where

#### Clase 4:

* Relaciones y Subdocumentos
  * Relación 1 a 1
  * Relación 1 a Muchos, con documento embebido
  * Relación 1 a Muchos, con documento referenciado
* Lógica de Negocio
* Modelado de Datos
* Validación de esquemas
* Funciones almacenadas

### 4) API RESTful con Node.js

[Url del API RESTful](https://edmaratones.herokuapp.com/api/)

#### Clase 1:

* Introducción a las API RESTful
  * API
  * REST
* Herramientas para consumir un API RESTful
  * Formato de sálida
  * Cliente HTTP para consumir
* Anatomía de una petición
  * Rutas
  * Métodos
  * Cabeceras
  * Datos
* Códigos de estado de HTTP

#### Clase 2:

* Desarrollo de API RESTful I
  * Estructura del API
  * Configuración de Express.js
  * Variables de Entorno Node
  * Creación del servidor web
  * Conexión a la BD con Mongoose
  * Modelando la BD con Mongoose

#### Clase 3:

* Desarrollo de API RESTful II
  * Modelos
  * Rutas
  * Lógica de Negocio
  * Programación CRUD del API

#### Clase 4:

* Desarrollo de API RESTful III
  * Pruebas CRUD con POSTMAN
  * Habilitando CORS y Métodos REST
  * Habilitando interacción con Formularios HTML
  * Pruebas CRUD con Formularios HTML
* Desplegando API RESTful en producción
  * Heroku
  * mLab
  * Configuración para producción
