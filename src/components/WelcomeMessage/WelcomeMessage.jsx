import React from 'react'
import styles from './WelcomeMessage.module.css'

const WelcomeMessage = () => {
  return (
    <h1 className={styles.heading}>
      Welcome to <span className={styles.title}>Marvelous</span> portal!
    </h1>
  )
}

export default WelcomeMessage
