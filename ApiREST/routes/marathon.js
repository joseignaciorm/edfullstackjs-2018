const Marathon = require('../models/marathon'),
  c = console.log

const apiResponse = (req, res, err, data) => {
  if (err) {
    res.status(500).send({
      message: `Error interno del servidor. ${err.message}`
    })
  } else {
    if (data) {
      res.status(200).send({ data })
    } else {
      res.status(404).send({
        message: `No existen datos en el API con tus parámetros de búsqueda.`
      })
    }
  }
}

const getMarathons = async (req, res) => {
  await Marathon
    .find({})
    .sort({ '_id': -1 })
    .exec((err, data) => apiResponse(req, res, err, data))
}

const postMarathon = async (req, res) => {
  let marathon = new Marathon(req.body)
  c(req.body)
  await marathon.save((err, data) => apiResponse(req, res, err, data))
}

const getMarathon = async (req, res) => {
  await Marathon
    .findById(req.params.id)
    .exec((err, data) => apiResponse(req, res, err, data))
}

const putMarathon = async (req, res) => {
  await Marathon.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => apiResponse(req, res, err, data)
  )
}

const deleteMarathon = async (req, res) => {
  await Marathon.findByIdAndRemove(
    req.params.id,
    (err, data) => apiResponse(req, res, err, data)
  )
}

module.exports = {
  getMarathons,
  postMarathon,
  getMarathon,
  putMarathon,
  deleteMarathon
}
