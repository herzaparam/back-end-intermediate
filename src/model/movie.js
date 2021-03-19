const connection = require('../config/db')

const movies = {
    getMovies: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM movie_details LIMIT 5', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getLimitMovies: (limit, page) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM movie_details LIMIT ${(limit*page)-limit}, ${limit} `,(err, result) => {
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
    getMoviesById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM movie_details WHERE movie_Id = ?', id, (err, results) => {
                if (!err) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    },

    insertMovies: (detail) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO movie_details SET ?', detail, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    updateMovies: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE movie_details SET ? WHERE movie_Id = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteMovies: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM movie_details WHERE movie_ID = ?', id, (err, results) => {
                if (!err) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    }
}

module.exports = movies
