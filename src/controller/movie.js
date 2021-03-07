const moviesModel = require('../model/movie')

exports.getMovies = (req, res) => {
  moviesModel.getMovies()
    .then((result) => {
      res.json({
        movie: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.getMoviesById = (req, res) => {
  const id = req.params.id
  moviesModel.getMoviesById(id)
    .then((result) => {
      res.json({
        movie: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.getLimitMovies = (req, res) => {
  moviesModel.getLimitMovies()
    .then((result) => {
      res.json({
        movie: result
      })
    }).catch((err) => {
      console.log(err)
    })
}

exports.insertMovies = (req, res) => {
  const { movie_Id, title, genre, movie_duration, directed_by, casts, Synopsis, price } = req.body
  const detail = {
    movie_Id,
    title,
    genre,
    movie_duration,
    directed_by,
    casts,
    Synopsis,
    price
  }
  moviesModel.insertMovies(detail)
    .then((result) => {
      res.json({
        movies: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updateMovies = (req, res) => {
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
      res.json({
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteMovies = (req, res) => {
  const movieId = req.params.id
  moviesModel.deleteMovies(movieId)
    .then((result) => {
      res.json({
        detail: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
