const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rideSchema = new Schema(
  {
    name: String,
    ageLimit: Number,
    thrill:String,
    description: String,
    image: String ,
    themeParkId: [{ type: Schema.Types.ObjectId, ref: 'themeParkId' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Ride', rideSchema)