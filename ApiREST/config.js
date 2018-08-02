process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'dev') {
  process.env.URL_DB = 'mongodb://localhost:27017/edmaratones'
}
