const userModel = require('../model/user')

exports.getUserById = (req, res) => {
  const id = req.params.iduser
  userModel.getUserById(id)
    .then((result) => {
      res.json({
        user: result
      })
    }).catch((err) => {
      console.log(err)
    })
}
exports.getUser = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log(email);
  console.log();
  userModel.getUser(email, password)
    .then((result) => {
      res.json({
        user: result
      })
    }).catch((err) => {
      console.log(err)
    })
}
exports.insertUser = (req, res) => {
  const {  email, password } = req.body
  const user = {
    email,
    password
  }
  console.log(user);
  userModel.insertUser(user)
    .then((result) => {
      res.json({
        user: result
      }).catch((err) => {
        console.log(err)
      })
    })
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
