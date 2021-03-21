const express = require('express')
const router = express.Router()
const moviesController = require('../controller/movie')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './image')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname )
    }
})

const upload = multer({ storage: storage})
router
    .get('/', moviesController.getMovies)
    .get('/lim', moviesController.getLimitMovies)
    .get('/:id', moviesController.getMoviesById)
    .post('/', upload.single('image'), moviesController.insertMovies)
    .put('/:id', moviesController.updateMovies)
    .delete('/:id', moviesController.deleteMovies)

module.exports = router
