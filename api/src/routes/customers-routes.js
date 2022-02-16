const router = require('express').Router()

const { customerController } = require('../controllers')

router.get('/customers', customerController.list)
router.get('/customers/:id', customerController.show)
router.post('/customers/', customerController.create)
router.put('/customers/:id', customerController.update)
router.delete('/customers/:id', customerController.destroy)
router.put('/customers/:id/restore', customerController.restore)

module.exports = router
