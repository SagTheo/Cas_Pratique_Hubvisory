import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import Picture from '../component/Picture'
import Footer from '../component/Footer'
import { HighscoreContext } from '../context/highscore-context'
import styles from '../css/Quizz.module.css'

const Quizz = () => {
  const [actorName, setActorName] = useState('')
  const [actorPicture, setActorPicture] = useState('')
  const [movieName, setMovieName] = useState('')
  const [moviePicture, setMoviePicture] = useState('')
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60)
  const highscore = useContext(HighscoreContext)
  const navigate = useNavigate()

  const getQuestion = () => {
    //Numbers used to generate random ids come from getting lengths of filtered arrays(test.js)
    const randomActorId = Math.floor(Math.random() * 196)
    const randomMovieId = Math.floor(Math.random() * 436)

    localStorage.setItem('actorId', randomActorId)
    localStorage.setItem('movieId', randomMovieId)

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

  const validateAnswer = (label) => {
    const randomActorId = localStorage.getItem('actorId')
    const randomMovieId = localStorage.getItem('movieId')

    fetch(`http://localhost:3001/checkAnswer/${randomMovieId}/${randomActorId}`)
      .then(res => res.json())
      .then(data => {
        if (data.response === label) {
          setScore(score + 1)
        }

        getQuestion()
      })
      .catch(err => console.log(err))
  }

  //To start the timer
  useEffect(() => {
    const countdown = setTimeout(() => {
        setTimer(timer - 1)
    }, 1000)

    if (timer === 0) {
        if (score > highscore.highscore) {
          highscore.updateHighscore(score)
          //To maintain highscore between games of different sessions
          localStorage.setItem('highscore', score)
        }
        navigate('/game_over')
    }

    return () => clearTimeout(countdown)
  }, [timer])

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.timer}>{timer}</div>
            <div>Score: {score} Highscore: {highscore.highscore}</div>
        </div>

        <div>
          <Picture picture={actorPicture} name={actorName} />
          <Picture picture={moviePicture} name={movieName} />

          <p className={styles.question}>Did {actorName} star in {movieName} ? </p>

          <Button label='No' validateAnswer={(label) => validateAnswer(label)} bg='red' />
          <Button label='Yes' validateAnswer={(label) => validateAnswer(label)} bg='green' />
        </div>

        <Footer extraStyle='black' />
    </div>
  )
}

export default Quizz