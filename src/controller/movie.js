const moviesModel = require('../model/movie')
const createError = require('http-errors')
const helpers = require('../helper/helper')
const { v4: uuidv4 } = require('uuid')
const redis = require('redis')
const client = redis.createClient(6379)

exports.getAllMovies = (req, res, next) => {
    moviesModel.getAllMovies()
        .then((result) => {
            const resultMovies = result
            client.setex("getAllMovies", 60 * 60 * 12, JSON.stringify(resultMovies))
            // setTimeout(()=>{
            helpers.response(res, resultMovies, 200)
            // }, 1000)
        })
        .catch((err) => {
            const error = new createError.InternalServerError()
            next(error)
        })
}

exports.getLimitMovies = (req, res, next) => {
    const limit = req.query.limit
    const page = req.query.page
    moviesModel.getLimitMovies(limit, page)
        .then((result) => {
            const resultProduct = result
            helpers.response(res, resultProduct, 200)
        }).catch((err) => {
            const error = new createError.InternalServerError()
            next(error)
        })
}
exports.getMoviesById = (req, res, next) => {
    const id = req.params.id
    moviesModel.getMoviesById(id)
        .then((result) => {
            const resultProduct = result
            helpers.response(res, resultProduct, 200)
        })
        .catch((err) => {
            const error = new createError.InternalServerError()
            next(error)
        })
}


exports.insertMovies = (req, res, next) => {
    const { title, genre, movie_duration, directed_by, casts, Synopsis, price } = req.body
    const detail = {
        movie_Id: uuidv4(),
        title,
        genre,
        movie_duration,
        directed_by,
        casts,
        Synopsis,
        price,
        image: `http://localhost:8000/img/${req.file.filename}`
    }
    moviesModel.insertMovies(detail)
        .then((result) => {
            const resultProduct = result
            helpers.response(res, resultProduct, 200)
        })
        .catch((err) => {
            const error = new createError.InternalServerError()
            next(error)
        })
}

exports.updateMovies = (req, res, next) => {
    const moviesId = req.params.id
    const { movie_Id, title, genre, movie_duration, directed_by, casts, Synopsis, price } = req.body
    const data = {
        movie_Id,
        title,
        genre,
        movie_duration,
        directed_by,
        casts,
        Synopsis,
        price

    }
    moviesModel.updateMovies(moviesId, data)
        .then((result) => {
            const resultProduct = result
            helpers.response(res, resultProduct, 200)
        })
        .catch((err) => {
            const error = new createError.InternalServerError()
            next(error)
        })
}

exports.deleteMovies = (req, res, next) => {
    const movieId = req.params.id
    moviesModel.deleteMovies(movieId)
        .then((result) => {
            const resultProduct = result
            helpers.response(res, resultProduct, 200)
        })
        .catch((err) => {
            const error = new createError.InternalServerError()
            next(error)
        })
}
