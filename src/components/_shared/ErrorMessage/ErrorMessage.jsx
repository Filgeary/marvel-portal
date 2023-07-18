import React from 'react'
import styles from './ErrorMessage.module.css'
import image from './pulsating-engine.svg'

/**
 * @param {object} props
 * @param {string=} props.text
 */
const ErrorMessage = ({ text = 'Unknown Error!' }) => {
  return (
    <div
      data-testid='errorMessage'
      className={styles.wrapper}
    >
      <section>
        <img
          src={image}
          alt='pulsating-engine'
          className={styles.img}
        />
        <h2>Error !</h2>
        <h3>{text}</h3>
      </section>
    </div>
  )
}

export default ErrorMessage
