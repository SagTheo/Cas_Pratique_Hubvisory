import React, { useEffect, useState } from 'react'

const Quizz = () => {
  const [actorName, setActorName] = useState('')
  const [actorPicture, setActorPicture] = useState('')
  const [movieName, setMovieName] = useState('')
  const [moviePicture, setMoviePicture] = useState('')

  useEffect(() => {
    // fetch('http://localhost:3001/actorName')
    //   .then(res => res.json())
    //   .then(data => setActorName(data.response))
    //   .catch(err => console.log(err))
    
    // fetch('http://localhost:3001/actorPicture')
    //   .then(res => res.json())
    //   .then(data => setActorPicture(data.response))
    //   .catch(err => console.log(err))

    // fetch('http://localhost:3001/movieName')
    //   .then(res => res.json())
    //   .then(data => setMovieName(data.response))
    //   .catch(err => console.log(err))

    // fetch('http://localhost:3001/moviePicture')
    //   .then(res => res.json())
    //   .then(data => setMoviePicture(data.response))
    //   .catch(err => console.log(err))
  })

  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w300/${actorPicture}`} alt={actorName} />
        <img src={`https://image.tmdb.org/t/p/w300/${moviePicture}`} alt={movieName} />

        <p>Did {actorName} star in {movieName} </p>

        <button>No</button>
        <button>Yes</button>
    </div>
  )
}

export default Quizz