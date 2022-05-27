import { movies } from '../data/movieIdsChunks/movieIds_finalChunk.mjs'
import fetch from 'node-fetch'
import fs from 'fs'

const ids = movies()

const apiKey = '52f72bf521daa8cdd02ef83abfb71e5b'

for await (let id of ids) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            if (data.posters.length > 0) {
                const content = data.id + ', '

                fs.writeFile('../data/filteredIds/filteredMovieIds.txt', content, { flag: 'a+' }, err => {
                    if (err) throw err
                })
            }
        })
        .catch(err => console.log(err))
}

