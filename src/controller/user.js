const { v4: uuidv4 } = require('uuid')
const userModel = require('../model/user')
const helpers = require('../helper/helper')
const bcrypt = require('bcryptjs')
const common = require('../helper/common')
const jwt = require('jsonwebtoken')

exports.getUserById = (req, res) => {
  const id = req.params.iduser
  userModel.getUserById(id)
    .then((result) => {
      const user = result[0]
      delete user.password
      res.json({
        user: user
      })
    }).catch((err) => {
      console.log(err)
    })
}
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await userModel.findUser(email)
    if (result.length === 0) {
      return helpers.response(res, null, 401, { email: 'wrong email and password combination!' })
    }
    const user = result[0]
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return helpers.response(res, null, 401, { email: 'wrong password!' })
    }
    delete user.password

    const payload = { email: user.email }
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
      user.token = token
      return helpers.response(res, user, 200, null)
    })
  } catch (error) {
    return helpers.response(res, null, 500, { message: 'internal server error' })
  }
}
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await userModel.findUser(email)
    if (result.length !== 0) {
      return helpers.response(res, null, 401, { email: 'email has already regitered!' })
    }
    const user = {
      user_Id: uuidv4(),
      email,
      password: await common.hashPassword(password),
      fname: '',
      lname: '',
      phone_number: ''
    }
    const resultInsert = await userModel.register(user)
    return helpers.response(res, resultInsert, 401, null)
  } catch (error) {
    console.log(error);
    return helpers.response(res, null, 500, { message: 'internal server error' })

  }
}


exports.updateUser = (req, res) => {
  const userId = req.params.iduser
  const { user_Id, fname, lname, email, phone_number } = req.body
  const user = {
    user_Id,
    fname,
    lname,
    email,
    phone_number
  }
  userModel.updateUser(userId, user)
    .then((result) => {
      res.json({
        user: result
      })
    }).catch((err) => {
      console.log(err)
    })
}

exports.deleteUser = (req, res) => {
  const userId = req.params.id
  userModel.deleteUser(userId)
    .then((result) => {
      res.json({
        deletedUser: result
      })
    }).catch((err) => {
      console.log(err)
    })
}
