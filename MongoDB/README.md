# [MongoDB](https://www.mongodb.com/)

## ¿Qué es?

> MongoDB es una base de datos NoSQL de tipo documental con alta escalabilidad y flexibilidad que:
> * Almacena datos en documentos flexibles, similares a JSON , lo que significa que los campos pueden variar de un documento a otro y la estructura de datos se puede cambiar con el tiempo.
> * El modelo de documento se correlaciona con los objetos en el código de la aplicación , facilitando el trabajo de los datos.
> * Las consultas ad hoc, la indexación y la agregación en tiempo real proporcionan formas poderosas de acceder y analizar datos.
> * Es una base de datos distribuida en su núcleo , por lo que la alta disponibilidad, la escala horizontal y la distribución geográfica están integradas y son fáciles de usar.
> * Es gratuita y de código abierto , publicado bajo la Licencia Pública General Affero de GNU.

## Diferencias ente SQL y NoSQL

SQL | NoSQL
-- | --
_Structured Query Language_ | _Not Only SQL_
Relacional | No Relacional
Tablas | Colecciones
Registros | Documentos (BSON)
Esquema definido | Esquema libre
Sin lazy loading | Con lazy loading

## Características

* Sin esquema.
* Alto rendimiento.
* Almacena documentos BSON.
* Enfocada en escalabilidad horizontal.
* Lenguaje de consultas potente.
* Sin transacciones.
* Agregado de datos.
* No impone forma a los datos.
* No necesita migraciones/reestructuración de la BBDD.
* Permite estructuras muy complejas.
* Herramientas potentes de agregado con JavaScript.
  * Map-Reduce.
  * Aggregation Pipeline.
* Índices geoespaciales.
* Búsquedas FTS (Full Text Search).
* Almacenamiento eficiente de blobs y ficheros.
* Sharding automático.
* Replicación.

### Úsalo para

* Prototipos y aplicaciones simples.
* Hacer la transición de front a back.
* Aplicaciones con mucha carga de escritura.
* Agregado de datos a un nivel medio/alto.
* Aplicaciones con datos muy heterogéneos.
* Enormes colecciones de datos (sharding).
* Almacenar ficheros (sharding).
* Se suelen favorecer los diseños desnormalizados.

### Evítalo para

* No puede hacer JOINs.
* Sin embargo, se pueden empotrar documentos y arrays.
* El lenguaje de consulta es menos potente que SQL.
* No tiene transacciones.

## Conceptos Básicos

### [Instalación](https://www.mongodb.com/download-center?jmp=nav#community)

* [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
* [macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### [Documentación](https://docs.mongodb.com/manual/)

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
* Puede alojar documentos con diferentes formas.

#### Operaciones con colecciones

* [Operaciones CRUD](https://docs.mongodb.com/manual/crud/).
* `db.collection.save`: guardar/actualizar un documento.
* `db.collection.insert`: inserta un documento.
* `db.collection.findOne`: recuperar un documento.
* `db.collection.find`: recuperar varios documentos.
* `db.collection.remove`: borrar uno o varios documentos.
* `db.collection.drop`: elimina la colección.
* `db.collection.rename`: cambia de nombre la colección.
* `db.collection.count`: número de documentos.

### Documentos

#### Estructura de un documento

```json
{
	"_id" : ObjectId("524872a99c50880000000001"),
	"email" : "jonmircha@gmail.com",
	"password" : "qwerty",
	"name" : "Jonathan",
	"date" : 1380479657300,
	"token" : "hm6ly43v.0o1or"
}
```

#### Un documento puede contener arreglos y otros documentos

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

### [Operadores](https://docs.mongodb.com/manual/reference/operator/query/)

* `$gt / $gte`: mayor/mayor o igual.
* `$lt / $lte`: menor/menor o igual.
* `$ne`: diferente.
* `$in / $nin`: en/no en array de valores.
* `$or`: se cumple alguna cláusula.
* `$and`: se cumplen todas las cláusulas.
* `$nor`: el resultado opuesto.
* `$not`: no se cumplen todas las cláusulas.

### Consultas

El mètodo find() devuelve un cursor, que representa un conjunto de resultados:

* `cursor.count(cb)`: cantidad de documentos.
* `cursor.sort(op, [cb])`: ordenación de documentos.
* `cursor.limit(n)`: limitar a n documentos.
* `cursor.skip(n)`: saltarse los n primeros documentos.
* `cursor.nextObject(cb)`: siguiente documento.
* `cursor.each(cb)`: para cada doc, en orden.
* `cursor.toArray(cb)`: convierte el cursor en array.
