import React from 'react'
import styles from '../css/Button.module.css'

const Button = ({ label, validateAnswer, bg, setTinder}) => {
  return (
    <button
        onClick={() => {
            validateAnswer(label)
            setTinder(label)
        }}
        className={styles.button}
        style={{ backgroundColor: bg }}
    >
        {label}
    </button>
  )
}

export default Button