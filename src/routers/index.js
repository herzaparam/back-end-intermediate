const express = require('express')
const route = express.Router()
const routeMovie = require('./movie')
const routeLocation = require('./location')
const routeTicket = require('./ticket')
const routeTransaction = require('./transaction')
const routeUserReg = require('./user')
const routeUserLogin = require('./usersignin')


route.use('/movies', routeMovie)
route.use('/location', routeLocation)
route.use('/ticket', routeTicket)
route.use('/transaction', routeTransaction)
route.use('/signin', routeUserLogin)
route.use('/signup', routeUserReg)
route.use('/profile', routeUserReg)

module.exports = route