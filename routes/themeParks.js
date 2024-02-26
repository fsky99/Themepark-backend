const express = require('express')
const router = express.Router()

const themeParksCtrl = require('../controllers/themePark')


router.get('/findAllThemeParks', themeParksCtrl.findAllThemePark)
router.get('/findThemePark/:id', themeParksCtrl.FindThemePark)
router.post('/createThemePark', themeParksCtrl.createThemePark)
router.put('/updateThemePark/:id', themeParksCtrl.updateThemePark)
router.delete('/deleteThemePark/:id', themeParksCtrl.deleteThemePark)
module.exports = router