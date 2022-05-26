import React from 'react'

const Button = ({ label, getQuestion,  validateAnswer}) => {
  return (
    <button
        onClick={() => {
            getQuestion()
            validateAnswer()
        }}
    >
        {label}
    </button>
  )
}

export default Button