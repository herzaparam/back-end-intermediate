const redis = require('redis')
const client = redis.createClient(6379)
const helper = require('../helper/helper')

const cacheAllMovies = (req, res, next) => {
    client.get('getAllMovies', (err, data) => {
        if (data) {
            const result = JSON.parse(data)
            return helper.response(res, result, 200, null)
        } else {
            next()
        }
    })
}

const clearAllMovies = (req, res, next) => {
    client.del("getAllProduct")
    next()
}
module.exports = {
    cacheAllMovies,
    clearAllMovies

}