import express from 'express'
import fetch from 'node-fetch'
import bodyParser from 'body-parser'
import cors from 'cors'
import { movies } from './ids/data/filteredIds/filteredMovieIds.mjs'
import { people } from './ids/data/filteredIds/filteredPersonIds.mjs' 
import 'dotenv/config'

const movieIds = movies()
const personIds = people()
// const apiKey = process.env.API_KEY
const apiKey = '52f72bf521daa8cdd02ef83abfb71e5b'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json())


app.get('/getQuestion/:itemIndex', (req, res) => {
    const index = req.params.itemIndex

    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const results = data.results[index]

            res.json({response : {
                actor: results.name,
                actorPic: results.profile_path,
                movie: results.known_for[0].title,
                moviePic: results.known_for[0].poster_path
            }})
        })
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