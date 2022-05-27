import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'

const Welcome = () => {
  return (
    <div>
        <h1>Movie quizz</h1>

        <p>Welcome to the quizz ! You'll be asked a series of "yes" or "no" questions. 
            Answer as many as you can in the allowed time ! 
            Good luck !
        </p>

        <Link to='/quizz'>Start</Link>

        <Footer />
    </div>
  )
}

export default Welcome