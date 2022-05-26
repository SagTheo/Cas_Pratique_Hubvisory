import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import Picture from '../component/Picture'

const Quizz = () => {
  const [actorName, setActorName] = useState('')
  const [actorPicture, setActorPicture] = useState('')
  const [movieName, setMovieName] = useState('')
  const [moviePicture, setMoviePicture] = useState('')
  const [checkAnswer, setCheckAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60)
  const navigate = useNavigate()

  const getQuestion = () => {
    const randomActorId = Math.floor(Math.random() * 100000)
    const randomMovieId = Math.floor(Math.random() * 100000)

    fetch(`http://localhost:3001/actorName/${randomActorId}`)
      .then(res => res.json())
      .then(data => setActorName(data.response))
      .catch(err => console.log(err))
    
    fetch(`http://localhost:3001/actorPicture/${randomActorId}`)
      .then(res => res.json())
      .then(data => setActorPicture(data.response))
      .catch(err => console.log(err))

    fetch(`http://localhost:3001/movieName/${randomMovieId}`)
      .then(res => res.json())
      .then(data => setMovieName(data.response))
      .catch(err => console.log(err))

    fetch(`http://localhost:3001/moviePicture/${randomMovieId}`)
      .then(res => res.json())
      .then(data => setMoviePicture(data.response))
      .catch(err => console.log(err))
  }

  const validateAnswer = () => {
    // fetch('http://localhost:3001/checkAnswer')
    //   .then(res => res.json())
    //   .then(data => setCheckAnswer(data.response))
    //   .catch(err => console.log(err))
  }

  //To start the timer
  useEffect(() => {
    const countdown = setTimeout(() => {
        setTimer(timer - 1)
    }, 1000)

    if (timer === 0) {
        navigate('/game_over')
    }

    return () => clearTimeout(countdown)
  }, [timer])

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <div>
        <div>
            <div>{timer}</div>
            <div>Score: {score}</div>
        </div>

        <Picture picture={actorPicture} name={actorName} />
        <Picture picture={moviePicture} name={movieName} />

        <p>Did {actorName} star in {movieName} ? </p>

        <Button label='No' getQuestion={getQuestion} validateAnswer={validateAnswer} />
        <Button label='Yes' getQuestion={getQuestion} validateAnswer={validateAnswer} />
    </div>
  )
}

export default Quizz