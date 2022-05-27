import React from 'react'

const Button = ({ label, validateAnswer}) => {
  return (
    <button
        onClick={() => {
            validateAnswer(label)
        }}
    >
        {label}
    </button>
  )
}

export default Button