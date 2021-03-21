const jwt = require('jsonwebtoken')
const helpers = require('../helper/helper')

const verifyAcces = (req, res, next) =>{
    const auth = req.headers.authorization
    if(!auth){
        return helpers.response(res, null, 401, {message: 'server need token'})
    }
    let token = auth.split(" ")
    token = token[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if(err){
            if(err.name === 'JsonWebTokenError'){
                return helpers.response(res, null, 401, { message: 'invalid signature'})
            } else if (err.name === 'TokenExpiredError'){
                return helpers.response(res, null, 401, { message: 'token expired'})
            } else {
                return helpers.response(res, null, 401, { message: 'token not active'})

            }
        }
    req.email = decoded.email

    next()
    })
}

module.exports = {
    verifyAcces
}