const app = require('./app')
const http = require('http')

const config = require('./config')

const port = config.server.port

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
