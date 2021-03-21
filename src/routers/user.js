const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const auth = require('../middleware/auth')

router
  .get('/profile/:iduser', auth.verifyAcces, userController.getUserById)
  .post('/register', userController.register)
  .post('/login', userController.login)
  .put('/:iduser', userController.updateUser)
  .delete('/:id', userController.deleteUser)

module.exports = router
