const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: /^[A-z]+(?:\s[A-z]+)+$/
    },
    email: {
        type: String,
        required: true,
        validate: /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/
    },
    address: {
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        zip_code: {
            type: Number,
            required: true
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

customerSchema.plugin(mongooseDelete, { overrideMethods: true })

const customer = mongoose.model('customer', customerSchema)
module.exports = customer
