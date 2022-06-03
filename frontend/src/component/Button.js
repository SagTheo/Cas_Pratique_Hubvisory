import React from 'react'
import styles from '../css/Button.module.css'

const Button = ({ label, id, getQuestion, bg, setTinder}) => {
  return (
    <button
        onClick={() => {
            getQuestion()
            setTinder(id)
        }}
        className={styles.button}
        style={{ backgroundColor: bg }}
    >
        {label}
    </button>
  )
}

export default Button