const connection = require('../config/db')

const user = {
  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE user_Id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getUser: (email, password) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          (
            reject(err)
          )
        }
      })
    })
  },
  insertUser: (user) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  updateUser: (userId, user) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE user SET ? WHERE user_Id = ?', [user, userId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM user WHERE user_Id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = user
