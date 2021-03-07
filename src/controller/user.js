const userModel = require('../model/user')

exports.getUser = (req, res) => {
    userModel.getUser()
        .then((result) => {
            res.json({
                user: result
            })
        }).catch((err) => {
            console.log(err);
        })
}
exports.getUserById = (req, res) => {
    const id = req.params.id
    userModel.getUserById(id)
        .then((result) => {
            res.json({
                user: result
            })
        }).catch((err) => {
            console.log(err);
        })
}
exports.insertUser = (req, res) => {
    const { user_Id, name, email, phone_number } = req.body
    const user = {
        user_Id,
        name,
        email,
        phone_number
    }
    userModel.insertUser(user)
        .then((result) => {
            res.json({
                user: result
            }).catch((err) => {
                console.log(err);
            })
        })
}
exports.updateUser = (req, res) => {
    const userId = req.params.id
    const { user_Id, name, email, phone_number } = req.body
    const user = {
        user_Id,
        name,
        email,
        phone_number
    }
    userModel.updateUser(userId, user)
        .then((result) => {
            res.json({
                user: result
            })
        }).catch((err) => {
            console.log(err);
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
            console.log(err);
        })
}
