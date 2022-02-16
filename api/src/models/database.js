const mongoose = require('mongoose')

const config = require('../config')

mongoose.connect(config.database.uri)

mongoose.connection.on('connected', function() { console.log('Database connected!') })
mongoose.connection.on('error', function(err) { console.log('Connection error: ' + err) })
mongoose.connection.on('disconnected', function() { console.log('Database disconnected!') })

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Database connection closed!')
    process.exit(0)
  })
})

require('./Customer')
require('./User')
