import express from 'express'
import fetch from 'node-fetch'
import bodyParser from 'body-parser'
import cors from 'cors'
import { movies } from './ids/data/filteredIds/filteredMovieIds.mjs'
import { people } from './ids/data/filteredIds/filteredPersonIds.mjs' 
import 'dotenv/config'

const movieIds = movies()
const personIds = people()
const apiKey = process.env.API_KEY

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json())


app.get('/actorName/:personId', (req, res) => {
    const personId = personIds[req.params.personId]

    fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => res.json({response: data.name}))
        .catch(err => console.log(err))
})

app.get('/actorPicture/:personId', (req, res) => {
    const personId = personIds[req.params.personId]

    fetch(`https://api.themoviedb.org/3/person/${personId}/images?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => res.json({response: data.profiles[0].file_path}))
        .catch(err => console.log(err))
})

app.get('/movieName/:movieId', (req, res) => {
    const movieId = movieIds[req.params.movieId]

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => res.json({response: data.original_title}))
        .catch(err => console.log(err))
})

app.get('/moviePicture/:movieId', (req, res) => {
    const movieId = movieIds[req.params.movieId]

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => res.json({response: data.posters[0].file_path}))
        .catch(err => console.log(err))
})

app.get('/checkAnswer/:movieId/:personId', (req, res) => {
    const movieId = movieIds[req.params.movieId]
    const personId = personIds[req.params.personId]

    fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            const answer = data.cast.filter(item => item.id === movieId)

            if (answer.length > 0) {
                res.json({response: '1'}) //good answer 
            } else {
                res.json({response: '0'})  //wrong answer
            }
        })
})

app.listen(3001, console.log('server started')) 