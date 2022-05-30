import React from 'react'
import styles from '../css/Picture.module.css'

const Picture = ({ picture, name }) => {
  return (
    <img src={`https://image.tmdb.org/t/p/w300/${picture}`} alt={name} className={styles.picture} />
  )
}

export default Picture