import React from 'react'
import logo from '../images/tmdbLogo.svg'
import styles from '../css/Footer.module.css'

const Footer = ({ extraStyle }) => {
  return (
    <div style={{ backgroundColor: extraStyle }}>
        <p className={styles.attribution}>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        <img src={logo} alt='TMDB' className={styles.logo} />
    </div>
  )
}

export default Footer