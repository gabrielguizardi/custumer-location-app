const router = require('express').Router()

const { userController, authenticationController } = require('../controllers')

router.post('/users', userController.create)
router.post('/login', authenticationController.login)

module.exports = router
