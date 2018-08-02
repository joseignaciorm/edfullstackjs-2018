const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CountrySchema = new Schema({
    /**
     * code
     * name
     */
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('Country', MarathonSchema)
