const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const moviesRouter = require('./src/routers/movie')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/buy', moviesRouter)


app.listen(port,()=>{
    console.log('server is running port ' + port);
})