const express = require('express')
const router = express.Router()

const themeParksCtrl = require('../controllers/themePark')


router.get('/', themeParksCtrl.findAllThemePark)
router.get('/:id', themeParksCtrl.FindThemePark)
router.post('/', themeParksCtrl.createThemePark)
router.put('/:id', themeParksCtrl.updateThemePark)
router.delete('/:id', themeParksCtrl.deleteThemePark)
module.exports = router