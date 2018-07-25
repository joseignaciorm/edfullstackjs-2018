# [MongoDB](https://www.mongodb.com/)

## Diferencias ente SQL y NoSQL

SQL | NoSQL
-- | --
_Structured Query Language_ | _Not Only SQL_
Relacional | No Relacional
Tablas | Colecciones
Registros | Documentos (BSON)
Campos | Atributos
Esquema definido | Esquema libre
Sin lazy loading | Con lazy loading

## ¿Qué es?

> MongoDB es una base de datos NoSQL de tipo documental con alta escalabilidad y flexibilidad que:
> * Almacena datos en documentos flexibles, similares a JSON , lo que significa que los campos pueden variar de un documento a otro y la estructura de datos se puede cambiar con el tiempo.
> * El modelo de documento se correlaciona con los objetos en el código de la aplicación , facilitando el trabajo de los datos.
> * Las consultas ad hoc, la indexación y la agregación en tiempo real proporcionan formas poderosas de acceder y analizar datos.
> * Es una base de datos distribuida en su núcleo , por lo que la alta disponibilidad, la escala horizontal y la distribución geográfica están integradas y son fáciles de usar.
> * Es gratuita y de código abierto , publicado bajo la Licencia Pública General Affero de GNU.

### Características

* Sin esquema, no impone forma a los datos.
* Alto rendimiento, enfocada en escalabilidad horizontal.
* Sharding automático (balanceo de carga de datos).
* Lenguaje de consultas potente.
* No necesita migraciones, ni reestructuración.
* Permite estructuras muy complejas.
* Agregado de datos, índices geoespaciales y búsquedas FTS (Full Text Search).
* Almacenamiento eficiente de blobs y ficheros.
* Sin transacciones y sin JOINs, pero, puede empotrar documentos y arrays.

### Úsalo para

* Aplicaciones con mucha carga de escritura.
* Agregado de datos a un nivel medio/alto.
* Aplicaciones con datos muy heterogéneos.
* Enormes colecciones de datos (sharding).
* Almacenar ficheros (sharding).
* Se suelen favorecer los diseños desnormalizados.

## Conceptos Básicos

### [Instalación](https://www.mongodb.com/download-center?jmp=nav#community)

* [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
* [macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### Bases de datos

* Es un almacén de documentos, dividido en colecciones.
* Al igual que en JS, todo es un objeto.
* ¡Se integra genial con JavaScript!
* Los documentos son básicamente, objetos JSON Binarios (BSON).
* El límite de un documento es < 16MB.
* Consultas basadas en la estructura del documento.

### Colecciones

* Una colección es una agrupación de documentos.
* Puede alojar cualquier documento (no impone estructura).
* Puede alojar documentos con diferentes estructuras.

### Documentos

Estructura de un documento:

```json
{
  "_id" : ObjectId("524872a99c50880000000001"),
  "email" : "jonmircha@gmail.com",
  "password" : "qwerty",
  "name" : "Jonathan",
  "date" : ISODate(),
  "token" : "hm6ly43v.0o1or"
}
```

Un documento puede contener arreglos y otros documentos:

```json
{
  "_id" : ObjectId("5249a2e9b90687d56453b2f3"),
  "text" : "Soy un comentario",
  "user" : {
    "_id" : ObjectId("524872a99c50880000000001"),
    "nombre" : "Usuario Prueba",
    "avatar" : "/img/user-test.jpg"
  },
  "tags" : [ "test", "prueba" ]
}
```

### [Documentación](https://docs.mongodb.com/manual/)

* [Comandos del Shell](https://docs.mongodb.com/manual/reference/method/)
* [Comandos para Bases de Datos](https://docs.mongodb.com/manual/reference/command/)
* [Tipos de datos BSON](https://docs.mongodb.com/manual/reference/bson-types/index.html)
* [CRUD en documentos](https://docs.mongodb.com/manual/crud/)
* [Operadores](https://docs.mongodb.com/manual/reference/operator/)
* [Validación de esquemas](https://docs.mongodb.com/manual/core/schema-validation/)
* [Modelado de Datos](https://docs.mongodb.com/manual/core/data-model-design/)
* Relaciones
  * [Relación 1 a 1](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-one-relationships-between-documents/)
  * [Relación 1 a Muchos, con documento embebido](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/)
  * [Relación 1 a Muchos, con documento referenciado](https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/)
* [Funciones Almacenadas](https://docs.mongodb.com/manual/tutorial/store-javascript-function-on-server/index.html)
