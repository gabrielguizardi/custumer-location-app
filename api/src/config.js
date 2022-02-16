require('dotenv').config()

module.exports = {
    server: {
        port: process.env.PORT ?? '3333'
    },
    database: {
        uri: process.env.MONGO_URI ?? ''
    },
    jwt: {
        secretKey: process.env.AUTHENTICATION_SECRET_KEY ?? 'secret',
        expiresIn: '5d'
    }
}
