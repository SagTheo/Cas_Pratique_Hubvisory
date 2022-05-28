import React from 'react'
import logo from '../tmdbLogo.svg'
import styles from '../css/Footer.module.css'

const Footer = () => {
  return (
    <div>
        <p className={styles.attribution}>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        <img src={logo} alt='TMDB' className={styles.logo} />
    </div>
  )
}

export default Footer