/* Modelado de BD mongogram */

//Usar bd
use mongogram

//Esquema de colección users
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['user', 'user_date', 'email', 'password'],
      properties: {
        user: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es requerido'
        },
        user_date: {
          bsonType: 'date',
          description: 'Debe ser una fecha en formato ISODate y es requerido'
        },
        user_name: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es opcional'
        },
        email: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es requerido'
        },
        password: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es requerido'
        },
        phone: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es opcional'
        },
        bio: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es opcional'
        },
        web: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es opcional'
        },
        avatar: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es opcional'
        },
        birth_date: {
          bsonType: 'date',
          description: 'Debe ser una fecha en formato ISODate y es opcional'
        },
        genre: {
          enum: ['Hombre', 'Mujer', null],
          description: 'Debe ser sólo una opción de la lista y es opcional'
        },
        followers: {
          bsonType: 'array',
          description: 'Debes introducir el id o alias de un usuario y es opcional'
        },
        followings: {
          bsonType: 'array',
          description: 'Debes introducir el id o alias de un usuario y es opcional'
        }
      }
    }
  }
})

//Definición de atributos únicos
db.users.createIndex({ 'user': 1 }, { unique: true })
db.users.createIndex({ 'email': 1 }, { unique: true })

//Esquema de colección posts
db.createCollection('posts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['post_date', 'photo', 'user'],
      properties: {
        post_date: {
          bsonType: 'date',
          description: 'Debe ser una fecha en formato ISODate y es requerido'
        },
        plot: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es opcional'
        },
        photo: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es requerido'
        },
        user: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto y es requerido'
        },
        hearts: {
          bsonType: 'array',
          description: 'Debes introducir el usuario que aplica el heart y es opcional'
        },
        comments: {
          bsonType: 'array',
          description: 'Debes introducir un objeto con el usuario, el comentario y la fecha del mismo y es opcional'
        }
      }
    }
  }
})

//Mostrar las colecciones de la bd
show collections

//Insertar documentos en la colección users
db.users.insertMany([
  {
    user: '@jonmircha',
    user_date: ISODate(),
    email: 'jonmircha@gmail.com',
    password: hex_md5('my password')
  },
  {
    user: '@test1',
    user_date: ISODate(''),
    email: 'test1@gmail.com',
    password: hex_md5('my password')
  },
  {
    user: '@test2',
    user_date: ISODate(''),
    email: 'test2@gmail.com',
    password: hex_md5('my password')
  },
  {
    user: '@test3',
    user_date: ISODate(''),
    email: 'test3@gmail.com',
    password: hex_md5('my password')
  },
  {
    user: '@test4',
    user_date: ISODate(),
    email: 'test4@gmail.com',
    password: hex_md5('my password')
  }
])

//Leyendo los documentos de la colección users
db.users.find()

//Contando número de documentos en la colección users
db.users.find().count()

//Esto marcará error por las validaciones en la definición de la colección
db.users.insert({
  user: '@test4',
  user_date: ISODate(),
  email: 'test5@gmail.com',
  password: hex_md5('my password')
})

//Esto marcará error por las validaciones en la definición de la colección
db.users.insert({
  user: '@test5',
  user_date: ISODate(),
  email: 'test4@gmail.com',
  password: hex_md5('my password')
})

//Esto marcará error por las validaciones en la definición de la colección
db.users.update(
  { user: '@test4' },
  { email: 'test4@test.com' }
)

//Esto marcará error por las validaciones en la definición de la colección
db.users.insert({
  user: '@test5',
  email: 'test5@test.com'
})

//Esto marcará error por las validaciones en la definición de la colección
db.users.update(
  { user: '@test4' },
  {
    $set: {
      web: 19
    }
  }
)

//Haciendo follows
function follow(following, follower) {
  db.users.findOneAndUpdate(
    {
      user: following,
      followers: {
        $nin: [follower]
      }
    },
    {
      $push: {
        followers: follower
      }
    },
    {
      returnNewDocument: true
    },
    db.users.findOneAndUpdate(
      {
        user: follower,
        followings: {
          $nin: [following]
        }
      },
      {
        $push: {
          followings: following
        }
      },
      {
        returnNewDocument: true
      }
    )
  )
}

db.system.js.save({
  _id: 'follow',
  value: function (following, follower) {
    db.users.findOneAndUpdate(
      {
        user: following,
        followers: {
          $nin: [follower]
        }
      },
      {
        $push: {
          followers: follower
        }
      },
      db.users.findOneAndUpdate(
        {
          user: follower,
          followings: {
            $nin: [following]
          }
        },
        {
          $push: {
            followings: following
          }
        }
      )
    )
  }
})

db.eval(" follow('@jonmircha', '@test1') ")
db.eval(" follow('@jonmircha', '@test2') ")
db.eval(" follow('@jonmircha', '@test3') ")
db.eval(" follow('@jonmircha', '@test4') ")
db.eval(" follow('@test1', '@jonmircha') ")
db.eval(" follow('@test2', '@jonmircha') ")
db.eval(" follow('@test3', '@jonmircha') ")
db.eval(" follow('@test4', '@jonmircha') ")
db.eval(" follow('@test4', '@test1') ")

//Comprobando seguidores
db.users.findOne({ user: '@jonmircha' }).followers.length
db.users.findOne({ user: '@test1' }).followers.length
db.users.findOne({ user: '@test2' }).followers.length
db.users.findOne({ user: '@test3' }).followers.length
db.users.findOne({ user: '@test4' }).followers.length

//Comprobando a quién sigo
db.users.findOne({ user: '@jonmircha' }).followings.length
db.users.findOne({ user: '@test1' }).followings.length
db.users.findOne({ user: '@test2' }).followings.length
db.users.findOne({ user: '@test3' }).followings.length
db.users.findOne({ user: '@test4' }).followings.length

//Haciendo unfollows
function unfollow(unfollowing, unfollower) {
  db.users.findOneAndUpdate(
    {
      user: unfollowing,
      followers: {
        $in: [unfollower]
      }
    },
    {
      $pull: {
        followers: unfollower
      }
    },
    {
      returnNewDocument: true
    },
    db.users.findOneAndUpdate(
      {
        user: unfollower,
        followings: {
          $in: [unfollowing]
        }
      },
      {
        $pull: {
          followings: unfollowing
        }
      },
      {
        returnNewDocument: true
      }
    )
  )
}

db.system.js.save({
  _id: 'unfollow',
  value: function (unfollowing, unfollower) {
    db.users.findOneAndUpdate(
      {
        user: unfollowing,
        followers: {
          $in: [unfollower]
        }
      },
      {
        $pull: {
          followers: unfollower
        }
      },
      db.users.findOneAndUpdate(
        {
          user: unfollower,
          followings: {
            $in: [unfollowing]
          }
        },
        {
          $pull: {
            followings: unfollowing
          }
        }
      )
    )
  }
})

db.eval(" unfollow('@jonmircha', '@test1') ")
db.eval(" unfollow('@jonmircha', '@test2') ")
db.eval(" unfollow('@jonmircha', '@test3') ")
db.eval(" unfollow('@jonmircha', '@test4') ")

//Número de seguidores
db.users.findOne({ user: '@jonmircha' }).followers.length
db.users.findOne({ user: '@test1' }).followers.length
db.users.findOne({ user: '@test2' }).followers.length
db.users.findOne({ user: '@test3' }).followers.length
db.users.findOne({ user: '@test4' }).followers.length

//A cuántos usuarios sigo
db.users.findOne({ user: '@jonmircha' }).followings.length
db.users.findOne({ user: '@test1' }).followings.length
db.users.findOne({ user: '@test2' }).followings.length
db.users.findOne({ user: '@test3' }).followings.length
db.users.findOne({ user: '@test4' }).followings.length

//Insertar documentos en la colección posts
db.posts.insertMany([
  {
    post_date: ISODate(),
    photo: 'foto1.jpg',
    user: '@jonmircha',
  },
  {
    post_date: ISODate(),
    photo: 'foto2.jpg',
    user: '@jonmircha',
  },
  {
    post_date: ISODate(),
    photo: 'foto3.jpg',
    user: '@jonmircha',
  },
  {
    post_date: ISODate(),
    photo: 'foto4.jpg',
    user: '@test1',
  },
  {
    post_date: ISODate(),
    photo: 'foto5.jpg',
    user: '@test1',
  },
  {
    post_date: ISODate(),
    photo: 'foto6.jpg',
    user: '@test2',
  },
  {
    post_date: ISODate(),
    photo: 'foto7.jpg',
    user: '@test2',
  },
  {
    post_date: ISODate(),
    photo: 'foto8.jpg',
    user: '@test3',
  },
  {
    post_date: ISODate(),
    photo: 'foto9.jpg',
    user: '@test3',
  },
  {
    post_date: ISODate(),
    photo: 'foto10.jpg',
    user: '@test4',
  }
])

//Leyendo los documentos de la colección posts
db.posts.find()

//Contando número de documentos en la colección posts
db.posts.find().count()

//Contando posts por  users
db.posts.find({ user: '@jonmircha' }).count()
db.posts.find({ user: '@test1' }).count()
db.posts.find({ user: '@test2' }).count()
db.posts.find({ user: '@test3' }).count()
db.posts.find({ user: '@test4' }).count()

//Dando amor
db.system.js.save({
  _id: 'heart',
  value: function (user, post) {
    db.posts.findOneAndUpdate(
      {
        _id: post,
        hearts: {
          $nin: [user]
        }
      },
      {
        $push: {
          hearts: user
        }
      }
    )
  }
})

db.eval(" heart('@jonmircha', ObjectId('5b57c14578f77307083e73fa')) ")
db.eval(" heart('@test1', ObjectId('5b57c14578f77307083e73fa')) ")
db.eval(" heart('@test2', ObjectId('5b57c14578f77307083e73fa')) ")
db.eval(" heart('@test3', ObjectId('5b57c14578f77307083e73fa')) ")
db.eval(" heart('@test4', ObjectId('5b57c14578f77307083e73fa')) ")

//Número de corazones
db.posts.findOne({ _id: ObjectId('5b57c14578f77307083e73fa') }).hearts.length

//Quitando amor
db.system.js.save({
  _id: 'unheart',
  value: function (user, post) {
    db.posts.findOneAndUpdate(
      {
        _id: post,
        hearts: {
          $in: [user]
        }
      },
      {
        $pull: {
          hearts: user
        }
      }
    )
  }
})

db.eval(" unheart('@test3', ObjectId('5b57c14578f77307083e73fa')) ")
db.eval(" unheart('@test4', ObjectId('5b57c14578f77307083e73fa')) ")

//Número de corazones
db.posts.findOne({ _id: ObjectId('5b57c14578f77307083e73fa') }).hearts.length

//Insertar comentarios
db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 1',
        user: '@jonmircha'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 2',
        user: '@test1'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 3',
        user: '@test2'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 4',
        user: '@test3'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 5',
        user: '@test4'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 6',
        user: '@test2'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 7',
        user: '@test1'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 8',
        user: '@test2'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 9',
        user: '@jonmircha'
      }
    }
  }
)

db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $push: {
      comments: {
        _id: ObjectId(),
        comment_date: ISODate(),
        comment: 'Comentario 10',
        user: '@test3'
      }
    }
  }
)

//Número de comentarios
db.posts.findOne({ _id: ObjectId('5b57c14578f77307083e73fa') }).comments.length

//Eliminar comentarios
db.posts.update(
  { _id: ObjectId('5b57c14578f77307083e73fa') },
  {
    $pull: {
      comments: {
        _id: ObjectId('5b57e9ce78f77307083e740c')
      }
    }
  }
)

//Número de comentarios
db.posts.findOne({ _id: ObjectId('5b57c14578f77307083e73fa') }).comments.length
