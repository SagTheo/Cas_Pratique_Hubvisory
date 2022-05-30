import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import { HighscoreContext } from '../context/highscore-context'
import styles from '../css/GameOver.module.css'

const GameOver = () => {
  const highscore = useContext(HighscoreContext)

  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Game over</h1>

        <div>
          <p className={styles.text}>Total score: {highscore.highscore}</p>

          <Link to='/quizz' className={styles.retry}>Retry</Link>
        </div>
        

        <Footer />
    </div>
  )
}

export default GameOver