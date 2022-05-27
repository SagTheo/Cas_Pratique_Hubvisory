import express from 'express'
import fetch from 'node-fetch'
import bodyParser from 'body-parser'
import cors from 'cors'
import { movies } from './ids/data/first_100000/movieIds_100000.mjs'
import { people } from './ids/data/first_100000/personIds_100000.mjs' 

const movieIds = movies()
const personIds = people()

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json())

const apiKey = '52f72bf521daa8cdd02ef83abfb71e5b'


app.get('/actorName/:personId', (req, res) => {
    const personId = personIds[req.params.personId]
    console.log('actor id: ' + personId)

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
    console.log('movie id: ' + movieId)

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

// app.get('/testQuestion', (req, res) => {
//     fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}&language=en-US`)
//         .then(res => res.json())
//         .then(data => {
//             const answer = data.cast.filter(item => item.id === movieId)

//             if (answer.length > 0) {
//                 res.json({response: 'yes'}) //good answer
//             } else {
//                 res.json({response: 'no'})  //wrong answer
//             }
//         })
// })

app.listen(3001, console.log('server started')) 