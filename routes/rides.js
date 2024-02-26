const express = require('express')
const router = express.Router()

const ridesCtrl = require('../controllers/ride')


router.get('/', ridesCtrl.findAllRide)
router.get('/:id', ridesCtrl.FindRide)
router.post('/', ridesCtrl.createRide)
router.put('/:id', ridesCtrl.updateRide)
router.delete('/:id', ridesCtrl.deleteRide)
module.exports = router