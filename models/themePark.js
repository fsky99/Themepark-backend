const mongoose = require('mongoose')

const Schema = mongoose.Schema

const themeParkSchema = new Schema(
    {
        name: String,
        location: String,
        opening_time: Date,
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('ThemePark', themeParkSchema)