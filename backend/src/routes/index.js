const router = require('express').Router()
const imageController = require('../controllers/image')
router.post('/', imageController.upload)

module.exports = router
