import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>This page doesn't exist</h1>

        <Link to='/' className={styles.link}>Back to the home page</Link>
    </div>
  )
}

export default NotFound