var express = require("express")
var router = express.Router();
var moviesController = require('../control/moviesController');

router.get("/", (req, res) => {
    let movies = moviesController.getMovies(req, res)
    res.statusCode = 200
    // res.json(movies)
})

router.post("/inputReviews", (req, res) => {
    let inputMovie = moviesController.postMovies(req, res)
    res.statusCode = 200
})

module.exports = router;  