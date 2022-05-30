import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import { HighscoreContext } from '../context/highscore-context'
import styles from '../css/GameOver.module.css'

const GameOver = () => {
  const highscore = useContext(HighscoreContext)

  return (
    <div>
        <h1>Game over</h1>

        <p>Total score: {highscore.highscore}</p>

        <Link to='/quizz'>Retry</Link>

        <Footer />
    </div>
  )
}

export default GameOver