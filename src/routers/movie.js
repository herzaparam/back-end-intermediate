const express = require('express')
const router = express.Router()
const moviesController = require('../controller/movie')
const {uploadMulter} = require('../middleware/uploadimg')
const {cacheAllMovies, clearAllMovies} = require('../middleware/redis')

router
    .get('/', cacheAllMovies, moviesController.getAllMovies)
    .get('/lim', moviesController.getLimitMovies)
    .get('/:id', moviesController.getMoviesById)
    .post('/', uploadMulter.single('image'), moviesController.insertMovies)
    .put('/:id', moviesController.updateMovies)
    .delete('/:id', moviesController.deleteMovies)

module.exports = router
