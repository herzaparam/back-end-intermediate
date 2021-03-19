const userSigninModel = require('../model/usersignin')

exports.login = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    userSigninModel.login(email, password)
      .then((result) => {
        res.json({
          user: result
        })
      }).catch((err) => {
        console.log(err)
      })
  }