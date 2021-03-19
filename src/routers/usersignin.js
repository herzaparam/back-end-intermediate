const express = require('express')
const router = express.Router()
const userSigninController = require('../controller/usersignin')

router
    .post('/', userSigninController.login)

module.exports = router