import { movies } from '../data/filteredIds/filteredMovieIds.mjs'
import { people } from '../data/filteredIds/filteredPersonIds.mjs' 


const actors = people()
const films = movies()

console.log('actors: ' + actors.length)
console.log('movies: ' + films.length)