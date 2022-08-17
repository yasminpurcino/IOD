const Movie = require("../model/movies")

const axios = require("axios");



function getMovies(req, res) {
    // let movies = []
    // let sintoniaMovie = new Movie("Sintonia", "Sintoniablabla", "toDoLink", "SintoniaReviewblabla")
    // let sintoniaMovie2 = new Movie("Sintonia2", "Sintoniablabla2", "toDoLink2", "SintoniaReviewblabla2")
    // movies.push(sintoniaMovie) //colocando o filme na lista de filmes
    // movies.push(sintoniaMovie2) // push eh add elemento (add o objeto em uma lista)

    axios.get('http://localhost:3000/reviews')
        .then(response => {
            console.log(response);
            res.send(response.data)

        })
        .catch(error => console.error(error));
}


function postMovies() {

    axios.post('http://localhost:3000/inputReviews', movie)
        .then(response => {
            console.log(response);

        })
        .catch(error => console.error(error));
}


module.exports = {
    getMovies,
    postMovies

}