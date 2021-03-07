require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
const moviesRouter = require('./src/routers/movie')
const userRouter = require('./src/routers/user')
const locationRouter = require('./src/routers/location')
const ticketRouter = require('./src/routers/ticket')
const transactionRouter = require('./src/routers/transaction')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/movies', moviesRouter)
app.use('/user', userRouter)
app.use('/location', locationRouter)
app.use('/ticket', ticketRouter)
app.use('/transaction', transactionRouter)

app.listen(port, () => {
  console.log('server is running port ' + port)
})
