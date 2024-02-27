const mongoose = require("mongoose")

const Schema = mongoose.Schema

const themeParkSchema = new Schema(
  {
    name: String,
    location: String,
    image: String,
    description: String,
    ridesIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ride",
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("ThemePark", themeParkSchema)
