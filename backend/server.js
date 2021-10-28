const dotenv = require('dotenv')
const express = require('express')
const app = express()
const connectDB = require('./config/db.config')
const errorHandler = require('./middleware/error.middleware')
const cors = require('cors')

dotenv.config({ path: "./backend/.env" })
connectDB()
app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
    res.send('MyItems Api running')
})

// Routes
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/oauth', require('./routes/oauth.route'))
app.use('/api/private', require('./routes/private.route'))
app.use('/api/product', require('./routes/product.route'))

// Error Handler Middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
)
process.on('unhandledRejection', (err, promise) => {
    console.log(process.env.NODE_ENV);
    console.log(`Logged Error: ${err.message}`)
    server.close( () => process.exit(1))
})