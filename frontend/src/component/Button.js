import React from 'react'
import styles from '../css/Button.module.css'

const Button = ({ label, id, validateAnswer, bg, setTinder}) => {
  return (
    <button
        onClick={() => {
            validateAnswer(id)
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