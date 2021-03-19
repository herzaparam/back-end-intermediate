const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router
  // .get('/', userController.getUser)
  .get('/', userController.getUser)
  .get('/:iduser', userController.getUserById)
  .post('/', userController.insertUser)
  .put('/:iduser', userController.updateUser)
  .delete('/:id', userController.deleteUser)

module.exports = router
