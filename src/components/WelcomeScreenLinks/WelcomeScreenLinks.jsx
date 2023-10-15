import React from 'react'
import { Link } from 'react-router-dom'
import styles from './WelcomeScreenLinks.module.css'

const WelcomeScreenLinks = () => {
  return (
    <div
      className='container p-2 text-center font-light align-items-center'
      data-testid='welcomeScreenLinks'
    >
      <p className={styles.heading}>OR</p>
      <p className='mb-2'>
        <i>look up</i>
      </p>

      <ul className='d-flex gap-1 align-items-center justify-center'>
        <li className={styles.listItem}>
          <Link
            to='/characters'
            className={styles.link}
          >
            Characters
          </Link>
          <span className='pl-05'>/</span>
        </li>

        <li className={styles.listItem}>
          <Link
            to='/comics'
            className={styles.link}
          >
            Comics
          </Link>
          <span className='pl-05'>/</span>
        </li>
      </ul>
    </div>
  )
}

export default WelcomeScreenLinks
