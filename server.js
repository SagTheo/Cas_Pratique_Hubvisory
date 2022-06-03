import express from 'express'
import fetch from 'node-fetch'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'

const apiKey = process.env.API_KEY

const zeroOrOneOrTwo = () => {
    if (Math.random() < 0.3) {
        return 0
    } else if (Math.random() < 0.6) {
        return 1
    } else {
        return 2
    }
}

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json())


app.get('/getQuestion/:itemIndex/:pageIndex', (req, res) => {
    //The numbers retrieved from the parameters could be generated here on the server side
    //They are sent by the client solely for practice purposes with node parameters
    const index = req.params.itemIndex
    const page = req.params.pageIndex
    //To pick a random movie among the three present in the "known_for" property
    const movieIndex = zeroOrOneOrTwo()

    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=${page}`)
        .then(res => res.json())
        .then(data => {
            const results = data.results[index]

            res.json({response : {
                actor: results.name,
                actorPic: results.profile_path,
                movie: results.known_for[movieIndex].title ?? results.known_for[movieIndex].name,
                moviePic: results.known_for[movieIndex].poster_path
            }})
        })
        .catch(err => console.log(err, index, page, movieIndex))
})

app.listen(3001, console.log('server started')) 