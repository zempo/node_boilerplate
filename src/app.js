require('dotenv').config()
const express = require('express')
const errorCatch = require('../middleware/error')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { PORT, NODE_ENV } = require('./config')

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'dev';

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())
app.use(errorCatch)

app.get('/', (req, res) => {
    res.send('hello boilerplate')
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

module.exports = app
