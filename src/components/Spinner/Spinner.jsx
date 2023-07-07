import React from 'react'
import styles from './Spinner.module.css'
import spinnerImg from './spinner-twirl.svg'

const Spinner = () => {
  return (
    <div
      data-testid='spinner'
      className={styles.wrapper}
    >
      <img
        src={spinnerImg}
        alt='spinner'
        className={styles.img}
      />
    </div>
  )
}

export default Spinner
