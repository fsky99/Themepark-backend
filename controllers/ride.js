const Ride = require('../models/ride')

module.exports = {
    findAllRide,
    FindRide,
    createRide,
    updateRide,
    deleteRide
}
//find all Ride
async function findAllRide(req, res) {
    const rides = await Ride.find({})
    res.send(rides)
}
//find specific Ride
async function FindRide(req, res) {
    const ride = await Ride.findById(req.params.id)
    res.send(ride)
}

// create Ride
async function createRide(req, res) {
    try {
        await Ride.create(req.body)
        res.send('Ride Created')
    } catch (err) {
        console.log('This is the error!!!' + err)
        res.send({ errorMsg: err.message })
    }
}
// update Ride
async function updateRide(req, res) {
    try {
        await Ride.findByIdAndUpdate(req.params.id, req.body)
        res.send('Ride Updated')
    } catch (error) {
        console.log('This is the error!!!' + err)
        res.send({ errorMsg: err.message })
    }
}
// delete Ride
async function deleteRide(req, res) {
    try {
        await Ride.findByIdAndDelete(req.params.id)
        res.send('Ride Deleted')
    } catch (error) {
        console.log('This is the error!!!' + err)
        res.send({ errorMsg: err.message })
    }
}