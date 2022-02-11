const express = require('express')
const morgan = require('morgan')

require('./models/database')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', (req, res) => {
    res.json({
        hello: 'world'
    })
})

module.exports = app
