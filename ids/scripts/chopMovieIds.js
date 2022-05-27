import { movies } from '../data/first_100000/movieIds_100000.mjs'
import fs from 'fs'

const ids = movies()

for (let i = 0; i < 10; i++) {
    const slicedArr = ids.splice(0, 10000)

    fs.writeFile(`../data/movieIdsChunks/movieIds_chunk_${i + 1}.txt`, '[', { flag: 'a+' }, err => {
        if (err) throw err
    })

    for (let id of slicedArr) {
        fs.writeFile(`../data/movieIdsChunks/movieIds_chunk_${i + 1}.txt`, id + ', ', { flag: 'a+' }, err => {
            if (err) throw err
        }) 
    }

    fs.writeFile(`../data/movieIdsChunks/movieIds_chunk_${i + 1}.txt`, ']', { flag: 'a+' }, err => {
        if (err) throw err
    })
}