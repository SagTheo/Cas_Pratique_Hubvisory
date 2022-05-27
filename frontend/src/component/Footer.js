import React from 'react'
import logo from '../tmdbLogo.svg'

const Footer = () => {
  return (
    <div>
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        <img src={logo} alt='TMDB' />
    </div>
  )
}

export default Footer