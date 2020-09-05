const router = require('express').Router()
const transactionController = require('../controllers/transaction')

router.post('/', transactionController.add)
router.get('/', transactionController.index)
// router.put('/:_id', transactionController.upload)
router.delete('/:_id', transactionController.delete)

module.exports = router
