import express from 'express'
import fetch from 'node-fetch'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json())

const apiKey = '52f72bf521daa8cdd02ef83abfb71e5b'
// const personId = 342
// const movieId = 65

// app.get('/testName', (req, res) => {
//     fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}`)
//         .then(res => res.json())
//         .then(data => res.json({response: data.name}))
//         .catch(err => console.log(err))
// })

// app.get('/testPicture', (req, res) => {
//     fetch(`https://api.themoviedb.org/3/person/${personId}/images?api_key=${apiKey}`)
//         .then(res => res.json())
//         .then(data => res.json({response: data.profiles[0].file_path}))
//         .catch(err => console.log(err))
// })

// app.get('/testMoviePicture', (req, res) => {
//     fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`)
//         .then(res => res.json())
//         .then(data => res.json({response: data.posters[0].file_path}))
//         .catch(err => console.log(err))
// })

// app.get('/testMovieName', (req, res) => {
//     fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
//         .then(res => res.json())
//         .then(data => res.json({response: data.original_title}))
//         .catch(err => console.log(err))
// })

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

let ids = []

/*

  Needs work

*/
// app.get('/loadIds', async (req, res) => { 
//     for (let i = 1; i < 1000; i++) {
//         const result = await fetch(`https://api.themoviedb.org/3/person/${i}?api_key=${apiKey}`)
//         const parsedResult = await result.json()
        
//         if (parsedResult.known_for_department && parsedResult.known_for_department === "Acting") {
//             ids.push(parsedResult.id)
//         }
//     }
    
//     res.json({response: ids})
// })

/*

  Needs work

*/
app.get('/loadIds', async (req, res) => {
    for (let i = 1; i < 10; i++) {
        const result = await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=${apiKey}`)
        const parsedResult = await result.json()
        
        if (parsedResult.id !== null) {
          ids.push(parsedResult.id)  
        }
    }
    
    res.json({response: ids})
})

app.listen(3001, console.log('server started')) 