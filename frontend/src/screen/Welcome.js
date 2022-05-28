import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import styles from '../css/Welcome.module.css'

const Welcome = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Cine'quizz</h1>

        <div>
          <p className={styles.text}>Welcome to the quizz ! You'll be asked a series of "yes" or "no" questions. 
              Answer as many as you can in the allowed time ! 
              Good luck !
          </p>

          <Link to='/quizz' className={styles.start}>Start</Link>
        </div>
        

        <Footer />
    </div>
  )
}

export default Welcome