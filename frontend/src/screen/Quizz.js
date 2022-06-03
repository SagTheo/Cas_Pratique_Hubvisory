import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import Picture from '../component/Picture'
import Footer from '../component/Footer'
import { HighscoreContext } from '../context/highscore-context'
import { GameOverContext } from '../context/gameOver-context'
import styles from '../css/Quizz.module.css'

const Quizz = () => {
  const [actorName, setActorName] = useState('')
  const [actorPicture, setActorPicture] = useState('')
  const [movieName, setMovieName] = useState('')
  const [moviePicture, setMoviePicture] = useState('')
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60)
  const [tinder, setTinder] = useState(null)
  const highscore = useContext(HighscoreContext)
  const gameOver = useContext(GameOverContext)
  const navigate = useNavigate()

  //To generate random index between 0 and 20
  const randomIndex = () => {
    return Math.floor(Math.random() * 20)
  }

  const getQuestion = () => {
    const itemIndex = randomIndex()
    //Must add 1 otherwise could generate an page index = 0, which would cause an error
    const pageIndex = randomIndex() + 1


    fetch(`http://localhost:3001/getQuestion/${itemIndex}/${pageIndex}`)
      .then(res => res.json())
      .then(data => {
        setActorName(data.response.actor)
        setActorPicture(data.response.actorPic)
        setMovieName(data.response.movie)
        setMoviePicture(data.response.moviePic)
      })
    
  }

  //To start the timer
  useEffect(() => {
    const countdown = setTimeout(() => {
        setTimer(timer - 1)
    }, 1000)

    if (timer === 0) {
        if (score > highscore.highscore) {
          highscore.updateHighscore(score)
        }
        //Sets gameOver.gameOver to true and therefore makes route to /game_over 
        //accessible only when timer has reached 0
        gameOver.updateGameOver()
        navigate('/game_over')
    }

    return () => clearTimeout(countdown)
  }, [timer])

  //When the component mounts, to start a game
  useEffect(() => {
    getQuestion()
  }, [])

  //To reset tinder to null between each click so that the animation is triggered
  //no matter if user clicks on same button multiple times in a row or not
  useEffect(() => {
    setTimeout(() => {
      setTinder(null)
    }, 300)
  }, [tinder])

  return (
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.timer}>{timer}</div>
            <div>Score: {score} Highscore: {highscore.highscore}</div>
        </div>

        <div>
          <div className={tinder === null ? null :
                                tinder === '0' ? styles.swipeLeft : styles.swipeRight}>
            <Picture picture={actorPicture} name={actorName} />
            <Picture picture={moviePicture} name={movieName} />
          </div>  

          <p className={styles.question}>Did {actorName} star in {movieName} ? </p>

          <Button label='No' 
                  id='0'
                  getQuestion={() => getQuestion()}  
                  setTinder={setTinder}
                  bg='red' 
          />
          <Button label='Yes' 
                  id='1'
                  getQuestion={() => getQuestion()} 
                  setTinder={setTinder}
                  setScore={setScore}
                  score={score}
                  bg='green' 
          />
        </div>

        <Footer extraStyle='black' />
      </div>
  )
}

export default Quizz