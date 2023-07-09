import React from 'react'
import styles from './CallToActionBox.module.css'

const CallToActionBox = ({ onClickActionButton }) => {
  return (
    <section className={styles.ctaSection}>
      <h2>
        Random character for today! <br /> Do you wanna know them better?
      </h2>

      <div>
        <h3 className='mb-2'>Or choose another one</h3>
        <button
          type='button'
          className='btn btn-primary btn-shadow-light'
          onClick={onClickActionButton}
        >
          Try It!
        </button>
      </div>
      <div
        className={styles.bgImageShield}
        role='img'
        aria-label='Captain America Shield'
      ></div>
    </section>
  )
}

export default CallToActionBox
