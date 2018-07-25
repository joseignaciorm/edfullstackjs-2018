//Ejecutar ayuda y comandos en Mongo
help
db.help()
db.version()
db.stats()

//Bases de datos y Colecciones
show dbs
show collections
use a_collection
db.dropDatabase()
db.a_collection.drop()

use mongo_basics

//Insertar un documento
db.users.insert({
  user: '@jonmircha',
  user_date: ISODate(),
  email: 'jonmircha@gmail.com',
  password: 'my password'
})

//Insertar varios documento
db.users.insertMany([
  {
    user: '@test1',
    user_date: ISODate(''),
    email: 'test1@gmail.com',
    password: 'my password'
  },
  {
    user: '@test2',
    user_date: ISODate(''),
    email: 'test2@gmail.com',
    password: 'my password'
  },
  {
    user: '@test3',
    user_date: ISODate(''),
    email: 'test3@gmail.com',
    password: 'my password'
  }
])

//Insertar un documento
db.users.insertOne({
  user: '@test4',
  user_date: ISODate(),
  email: 'test4@gmail.com',
  password: 'my password'
})

//Insertar un documento modificando el _id
db.users.insertOne({
  _id: '@test5',
  user: '@test5',
  user_date: ISODate('2018-07-18'),
  email: 'test5@gmail.com',
  password: 'my password'
})

//Buscar documentos
db.users.find()
db.users.find().pretty()
db.users.find({ email: 'jonmircha@gmail.com' })

//Eliminar un documento
db.users.remove({ user: '@test5' })

//Eliminar todos los documentos de una colección
db.users.remove({})

//Esto reemplazará toda la estructura del documento que se actualiza, no se recomienda usar, por que redefines todos sus atributos, los que se actualizan y los que no, tendrías que pasar el objeto completo con todos sus atributos, mejor usa el operador $set
db.users.update(
  { user: '@test4' },
  { email: 'test4@test.com' }
)

//Para corregir la consulta anterior tengo que pasar todo el objeto como estaba antes de la actualización, pero buscándolo por el email por que ya no tiene user
db.users.update(
  { email: 'test4@test.com' },
  {
    "user": "@test4",
    "user_date": ISODate(),
    "email": "test4@test.com",
    "password": "my password"
  }
)

//Con el operador $set no se tiene que pasar todo el objeto, sólo los atributos a modificar o agregar
db.users.update(
  { user: '@test4' },
  {
    $set: {
      password: 'my password test 4'
    }
  }
)

//Con el operador $set se pueden crear nuevos atributos al documento
db.users.update(
  { user: '@test4' },
  {
    $set: {
      web: 'test4.com'
    }
  }
)

//Con el operador $unset se pueden eliminar atributos al documento
db.users.update(
  { user: '@test4' },
  {
    $unset: {
      web: null
    }
  }
)

//Con el operador $push se pueden agregar valores en formato de arreglo, dentro de los atributos de un documento
db.users.update(
  { user: '@test4' },
  {
    $push: {
      web: 'test4.com'
    }
  }
)

db.users.update(
  { user: '@test4' },
  {
    $push: {
      web: 'test4.org'
    }
  }
)

//Con el operador $pull se pueden quitar valores a un atributo de tipo arreglo en el documento
db.users.update(
  { user: '@test4' },
  {
    $pull: {
      web: 'test4.com'
    }
  }
)

//Con el operador $inc se puede aumentar o disminuir el valor de un atributo de tipo número en el documento
db.users.update(
  { user: '@test4' },
  {
    $set: {
      balance: 100
    }
  }
)

db.users.update(
  { user: '@test4' },
  {
    $inc: {
      balance: 10
    }
  }
)

db.users.update(
  { user: '@test4' },
  {
    $inc: {
      balance: -20
    }
  }
)

//Para actualizar sólo un documento, se puede utilizar el método update o updateOne
db.users.updateOne(
  { user: '@test4' },
  {
    $set: {
      user_mane: 'Usuario de Prueba 4'
    }
  }
)

//Con el operador $rename se puede modificar el nombre de un atributo del documento
db.users.updateOne(
  { user: '@test4' },
  {
    $rename: {
      user_mane: 'user_name'
    }
  }
)

//Esta consulta teóricamente actualizaría todos los documentos de una colección, porque su objeto de consulta está vacio, pero en la práctica sólo actualizará el primer documento de la colección
db.users.update(
  {},
  {
    $set: {
      bio: 'Biografía del usuario'
    }
  }
)

//Para actualizar múltiples registros se utiliza update con la opción multi en true o el método updateMany
db.users.update(
  {},
  {
    $set: {
      bio: 'Biografía del usuario'
    }
  },
  { multi: true }
)

db.users.updateMany(
  {},
  {
    $set: {
      phone: '1234567890'
    }
  }
)

//Se pueden usar múltiples operadores $ en una consulta
db.users.update(
  { user: '@test4' },
  {
    $set: {
      phone: '0987654321',
      avatar: 'test4.jpg'
    },
    $inc: {
      balance: 20
    }
  }
)

//Ordenar documentos
db.users.find().sort({})

//Ordenar documentos de forma ascendente
db.users.find().sort({ _id: 1 })
db.users.find().sort({ user: 1 })

//Ordenar documentos de forma descendente
db.users.find().sort({ _id: -1 })
db.users.find().sort({ user: -1 })

//Ordenamiento combinado
db.users.find().sort({ _id: 1, user: -1 })
db.users.find().sort({ _id: -1, user: 1 })

//Contar documentos
db.users.find().count()
db.users.find({ phone: '1234567890' }).count()

//Consultas de documentos con expresiones regulares, como clausulas LIKE en SQL

//Buscando documentos que coincidan con la expresión en alguna parte del valor del atributo en cuestión
db.users.find({ email: /@gmail/ })

//Buscando documentos que coincidan con la expresión al inicio del valor del atributo en cuestión
db.users.find({ email: /^test/ })

//Buscando documentos que coincidan con la expresión al final del valor del atributo en cuestión
db.users.find({ email: /gmail.com$/ })

//Insertando atributos para buscar con la notación del punto
db.users.update(
  { user: '@jonmircha' },
  {
    $set: {
      user_name: {
        first: 'Jonathan',
        last: 'MirCha'
      }
    }
  }
)

db.users.update(
  { user: '@test1' },
  {
    $set: {
      user_name: {
        first: 'Usuario 1',
        last: 'de Prueba'
      }
    }
  }
)

db.users.update(
  { user: '@test2' },
  {
    $set: {
      user_name: {
        first: 'Usuario 2',
        last: 'de Prueba'
      }
    }
  }
)

db.users.update(
  { user: '@test3' },
  {
    $set: {
      user_name: {
        first: 'Usuario 3',
        last: 'de Prueba'
      }
    }
  }
)

db.users.update(
  { user: '@test4' },
  {
    $set: {
      user_name: {
        first: 'Usuario 4',
        last: 'de Prueba'
      }
    }
  }
)

//Consultas de documentos con notación de punto
db.users.find({ 'user_name.first': 'Jonathan' })
db.users.find({ 'user_name.first': /^Usuario/ })
db.users.find({ 'user_name.last': /ueba$/ })

//Insertando atributos para buscar con operadores de comparación
db.users.update(
  { user: '@jonmircha' },
  {
    $set: {
      age: 34,
      balance: 190,
      hobbies: ['programar', 'hacer ejercicio', 'enseñar']
    }
  }
)

db.users.update(
  { user: '@test1' },
  {
    $set: {
      age: 17,
      balance: 10,
      hobbies: ['películas', 'series', 'comics']
    }
  }
)

db.users.update(
  { user: '@test2' },
  {
    $set: {
      age: 25,
      balance: 50,
      hobbies: ['nadar', 'cocinar', 'dormir']
    }
  }
)

db.users.update(
  { user: '@test3' },
  {
    $set: {
      age: 50,
      balance: 500,
      hobbies: ['películas', 'cocinar', 'leer']
    }
  }
)

db.users.update(
  { user: '@test4' },
  {
    $set: {
      age: 27,
      balance: 210,
      hobbies: ['hacer ejercicio', 'series', 'dormir']
    }
  }
)

//Consultas de documentos con operadores de comparación
db.users.find({
  age: {
    $gt: 25
  }
})

db.users.find({
  age: {
    $gte: 25
  }
})

db.users.find({
  age: {
    $lt: 25
  }
})

db.users.find({
  age: {
    $lte: 25
  }
})

db.users.find({
  age: {
    $eq: 25
  }
})

db.users.find({
  age: {
    $ne: 25
  }
})

db.users.find({
  hobbies: {
    $in: ['películas']
  }
})

db.users.find({
  hobbies: {
    $in: ['hacer ejercicio', 'leer']
  }
})

db.users.find({
  hobbies: {
    $nin: ['comics']
  }
})

db.users.find({
  hobbies: {
    $nin: ['series', 'películas']
  }
})

//Consultas de documentos tipo BETWEEN de SQL
db.users.find({
  balance: {
    $gte: 50,
    $lte: 200
  }
})

//Consultas de documentos con operadores de comparación combinados
db.users.find({
  balance: {
    $gte: 100,
    $lte: 500,
  },
  age: {
    $gt: 18
  }
})

db.users.find({
  balance: {
    $gte: 100,
    $lte: 500,
  },
  age: {
    $lt: 18
  }
})

db.users.find({
  balance: {
    $gte: 100,
    $lte: 500,
  },
  age: {
    $gt: 18
  },
  hobbies: {
    $in: ['hacer ejercicio']
  }
})

//Consultas de documentos con operadores lógicos
//Not siempre requiere una expresión regular
db.users.find({
  user: {
    $not: /jonmircha/
  }
})

db.users.find({
  user: {
    $not: /tes/
  }
})

db.users.find({
  $nor: [
    { balance: { $gt: 100 } }
  ]
})

db.users.find({
  $nor: [
    { balance: { $gt: 100 } },
    { age: { $lte: 17 } }
  ]
})

db.users.find({
  $or: [
    { balance: { $gt: 100 } },
    { age: { $gt: 17 } }
  ]
})

db.users.find({
  $and: [
    { balance: { $gt: 100 } },
    { age: { $gte: 17 } }
  ]
})

db.users.find({
  $and: [
    { balance: { $gt: 100 } },
    { age: { $gt: 17 } }
  ]
})

//Otros operadores
//$type devuelve los documentos, donde el valor del atributo en cuestión tenga el tipo de dato especificado
db.users.find({
  age: {
    $type: 'double'
  }
})

db.users.find({
  user: {
    $type: 'string'
  }
})

db.users.find({
  user_name: {
    $type: 'object'
  }
})

db.users.find({
  hobbies: {
    $type: 'array'
  }
})

db.users.find({
  user_date: {
    $type: 'date'
  }
})

//$exists devuelve los documentos en donde el atributo en cuestión, existe o no
db.users.find({
  country: {
    $exists: false
  }
})

db.users.update(
  { user: '@jonmircha' },
  {
    $set: {
      country: 'México'
    }
  }
)

db.users.find({
  country: {
    $exists: true
  }
})

//Encriptación en formato MD5 con la función hex_md5()
db.users.update(
  { user: '@jonmircha' },
  {
    $set: {
      password: 'My Awesome P4ssW0Rd'
    }
  }
)

db.users.update(
  { user: '@jonmircha' },
  {
    $set: {
      password: hex_md5('My Awesome P4ssW0Rd')
    }
  }
)

//$where permite buscar documentos evaluando una expresión JavaScript
db.users.find({
  $where: function () {
    return (hex_md5('My Awesome P4ssW0Rd')) === this.password
  }
})
