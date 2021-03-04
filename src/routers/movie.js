const express = require('express')
const router = express.Router()
const moviesController = require('../controller/movie')

router
    .get('/', moviesController.getMovies)
    .get('/:id', moviesController.getMoviesById)
    .post('/', moviesController.insertMovies)
    .put('/:id', moviesController.updateMovies)
    .delete('/:id', moviesController.deleteMovies)

module.exports = router