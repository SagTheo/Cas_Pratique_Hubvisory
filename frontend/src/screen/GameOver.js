import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import { HighscoreContext } from '../context/highscore-context'
import { GameOverContext } from '../context/gameOver-context'
import styles from '../css/GameOver.module.css'

const GameOver = () => {
  const highscore = useContext(HighscoreContext)
  const gameOver = useContext(GameOverContext)

  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Game over</h1>

        <div>
          <p className={styles.text}>Total score: {highscore.highscore}</p>

          {/* Resets gameOver.gameOver to false so user can't access this page unless 
              they play another game and wait for timer to get to zero
          */}
          <Link to='/quizz' onClick={() => gameOver.updateGameOver()} className={styles.retry}>Retry</Link>
        </div>
        

        <Footer />
    </div>
  )
}

export default GameOver