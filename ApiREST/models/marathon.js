const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  MarathonSchema = new Schema({
    /**
     * name
     * country
     * location
     * altitude
     * race_web
     * race_logo
     * race_since
     * race_day
     * race_date
     * race_type
     * distance
     * resume
     */
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('Marathon', MarathonSchema)
