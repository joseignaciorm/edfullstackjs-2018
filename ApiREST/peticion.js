

//endpoint - https://css-tricks.com/
//                  - https://api.github.com/


// path - tag/javascript/
//            - tag/sass/

//    /users/:username/repos
//           - users/jonmircha
//           - users/alvarofelipe

let route = 'https://api.github.com/users/jonmircha/repos',
  options = {}

fetch(route, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))

let route = 'https://api.github.com/users/jonmircha/repos',
  options = {
    method: 'POST'
  }

fetch(route, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))

/**
 * {message: "Not Found", documentation_url: "https://developer.github.com/v3"}documentation_url: "https://developer.github.com/v3"message: "Not Found"__proto__: Object
 */

let route = 'https://api.github.com/user/repos',
  options = {
    method: 'POST'
  }

fetch(route, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))

/**
 * {message: "Requires authentication", documentation_url: "https://developer.github.com/v3/repos/#create"}
 * **/


let route = 'https://api.github.com/users/jonmircha/repos',
  options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

fetch(route, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))


let route = 'https://api.github.com/user/repos',
  data = { repo: 'nuevo-repo' },
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

fetch(route, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))
