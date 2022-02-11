const mongoose = require('mongoose')

const config = require('../config')

mongoose.connect(config.database.uri)

mongoose.connection.on('connected', () => console.log('Database connected!'))
mongoose.connection.on('error', (err) => console.log('Connection error: ' + err))
mongoose.connection.on('disconnected', () => console.log('Database disconnected!'))

process.on('SIGINT', () => {
  mongoose.connection.close( () => {
    console.log('Database connectio closed!')
    process.exit(0)
  })
})
