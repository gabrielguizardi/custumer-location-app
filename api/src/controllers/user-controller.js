const User = require('../models/User')

const create = async function(req, res) {
    const { username, email, password, password_confirmation } = req.body

    const user = await User.create({
        username,
        email,
        password,
        password_confirmation
    })

    return res.json(user)
}

module.exports = {
    create
}
