const jwt = require('jsonwebtoken')

const User = require('../models/User')
const config = require('../config')

const login = async function(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) return res.status(422).json({ error: { message: 'E-mail or password invalid' }})

    const isMatch = await user.comparePassword(password)

    if (!isMatch) return res.status(422).json({ error: { message: 'E-mail or password invalid' }})

    const token = jwt.sign({ userId: user._id }, config.jwt.secretKey)

    return res.json({ token, user })
}

module.exports = {
    login
}
