const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: /[A-Za-z]+$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

UserSchema.virtual('password_confirmation')
          .get(function() { return this._password_confirmation })
          .set(function(value) { return this._password_confirmation = value })

UserSchema.pre('validate', function(next) {
    if (this.password !== this.password_confirmation) {
        this.invalidate('password_confirmation', 'enter the same password')
    }

    next()
})

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)

    this.password = hash
    next()
})

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

const user = mongoose.model('user', UserSchema)
module.exports = user
