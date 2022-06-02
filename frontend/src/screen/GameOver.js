import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import { HighscoreContext } from '../context/highscore-context'
import styles from '../css/GameOver.module.css'

const GameOver = ({setGameOver }) => {
  const highscore = useContext(HighscoreContext)

  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Game over</h1>

        <div>
          <p className={styles.text}>Total score: {highscore.highscore}</p>

          {/* <Link to='/quizz' onClick={() => setGameOver(false)} className={styles.retry}>Retry</Link> */}
          <button onClick={() => setGameOver(false)} className={styles.retry}>Retry</button>
        </div>
        

        <Footer />
    </div>
  )
}

export default GameOver