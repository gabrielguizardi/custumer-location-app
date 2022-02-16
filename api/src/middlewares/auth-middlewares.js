const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const User = require('../models/User')
const config = require('../config')

const isAuthenticated = async function(req, res, next) {
    try {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).send({ error: { message: 'Not authorized!' } })
        }

        const decodedToken = await promisify(jwt.verify)(token, config.jwt.secretKey)

        const user = await User.findById(decodedToken.userId)

        req.user = user

        return next()
    } catch (err) {
        return res.status(401).json({ error: { message: 'Not authorized!' } })
    }
}

module.exports =  {
    isAuthenticated
}
