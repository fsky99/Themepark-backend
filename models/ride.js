const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rideSchema = new Schema(
  {
    type: String,
    ageLimit: Number,
    description: String,
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Ride', rideSchema)