import React from 'react'
import styles from '../css/Button.module.css'

const Button = ({ label, id, getQuestion, bg, setTinder, setScore, score}) => {
  return (
    <button
        onClick={() => {
            getQuestion()
            setTinder(id)
            if (id === '1') {
              setScore(score + 1)
            }
        }}
        className={styles.button}
        style={{ backgroundColor: bg }}
    >
        {label}
    </button>
  )
}

export default Button