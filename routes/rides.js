const express = require('express')
const router = express.Router()

const ridesCtrl = require('../controllers/ride')


router.get('/findAllRides', ridesCtrl.findAllRide)
router.get('/findride/:id', ridesCtrl.FindRide)
router.post('/createride', ridesCtrl.createRide)
router.put('/updateride/:id', ridesCtrl.updateRide)
router.delete('/deleteride/:id', ridesCtrl.deleteRide)
module.exports = router