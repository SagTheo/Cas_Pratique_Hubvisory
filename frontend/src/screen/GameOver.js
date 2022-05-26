import React from 'react'
import { Link } from 'react-router-dom'

const GameOver = () => {
  return (
    <div>
        <h1>Game over</h1>

        <p>Total score: </p>

        <Link to='/quizz'>Retry</Link>
    </div>
  )
}

export default GameOver