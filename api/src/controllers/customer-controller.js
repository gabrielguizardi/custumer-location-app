const Customer = require('../models/Customer')

const create = async function(req, res) {
    const { name, email, address } = req.body
    const user = req.user
    const customer = await Customer.create({
        name,
        email,
        address,
        user: user._id
    })

    return res.json(customer)
}

const update = async function(req, res) {
    const { id } = req.params
    const { name, address } = req.body

    const customer = await Customer.findOneAndUpdate({ _id: id, user: req.user._id }, {
        name,
        address
    })
    
    return res.json(customer)
}

const list = async function(req, res) {
    const { deleted_customers: deletedCustomers } = req.query

    var customers = []
    if (deletedCustomers === "true") {
        customers = await Customer.findDeleted({ user: req.user._id })
    } else {
        customers = await Customer.find({ user: req.user._id })
    }

    return res.json(customers)
}

const show = async function(req, res) {
    const { id } = req.params

    const customer = await Customer.findOneWithDeleted({ _id: id, user: req.user._id })

    return res.json(customer)
}

const destroy = async function(req, res) {
    const { id } = req.params

    const customer = await Customer.findOne({ _id: id, user: req.user._id })
    
    await customer.delete()

    return res.json(customer)
}

const restore = async function(req, res) {
    const { id } = req.params

    const customer = await Customer.findOneDeleted({ _id: id, user: req.user._id })
    
    await customer.restore()

    return res.json(customer)
}

module.exports = {
    create,
    update,
    list,
    show,
    destroy,
    restore
}
