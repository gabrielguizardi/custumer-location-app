const express = require('express')
const morgan = require('morgan')

const { customerRoutes, userRoutes } = require('./routes')
const { isAuthenticated } = require('./middlewares/auth-middlewares')

require('./models/database')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/', userRoutes)
app.use('/', isAuthenticated, customerRoutes)

module.exports = app
