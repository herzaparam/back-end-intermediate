const connection = require('../config/db')

const userSignin = {
    login: (email, password) => {
        return new Promise((resolve, reject) => {
          connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, result) => {
            if (err) {
              reject(err)
            } 
            if(result.length > 0){
              resolve(result)
            }else{
              console.log('kombinasi email dan password salah');
            }
          })
        })
      }
}

module.exports = userSignin
