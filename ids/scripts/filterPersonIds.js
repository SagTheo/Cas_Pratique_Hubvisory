import { people } from '../data/personIdsChunks/personIds_finalChunk.mjs'
import fetch from 'node-fetch'
import fs from 'fs'

const ids = people()

const apiKey = '52f72bf521daa8cdd02ef83abfb71e5b'

for await (let id of ids) {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            if (data.known_for_department === "Acting" && data.profile_path !== null) {
                const content = data.id + ', '

                fs.writeFile('../data/filteredIds/filteredPersonIds.txt', content, { flag: 'a+' }, err => {
                    if (err) throw err
                })
            }
        })
        .catch(err => console.log(err))
}

