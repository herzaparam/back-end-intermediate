require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const morgan = require('morgan')
// const bodyParser = require('body-parser')
// const moviesRouter = require('./src/routers/movie')
// const userRouter = require('./src/routers/user')
// const locationRouter = require('./src/routers/location')
// const ticketRouter = require('./src/routers/ticket')
// const transactionRouter = require('./src/routers/transaction')
const route = require('./src/routers/index')
const createError = require('http-errors')

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// app.use('/movies', moviesRouter)
// app.use('/user', userRouter)
// app.use('/location', locationRouter)
// app.use('/ticket', ticketRouter)
// app.use('/transaction', transactionRouter)
app.use('/v1', route)

app.use('*',(req,res,next)=>{
    const error = new createError.NotFound()
    next(error)
})
app.use((err,req,res,next)=>{
    if(!err.status){
        err.status = 500
    }
    res.json({
        message : err.message,
        status_error: err.status
    })
})

app.listen(port, () => {
  console.log('server is running port ' + port)
})
