import React from 'react'

const Picture = ({ picture, name }) => {
  return (
    <img src={`https://image.tmdb.org/t/p/w300/${picture}`} alt={name} />
  )
}

export default Picture