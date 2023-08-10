import cn from 'clsx'
import React from 'react'
import omgSticker from '../../assets/images/omg.png'
import styles from './AppHeader.module.css'

const AppHeader = () => {
  return (
    <header
      className={styles.header}
      data-testid='appHeader'
    >
      <div className={cn('container', styles.wrapper)}>
        <img
          data-id='omgSticker'
          src={omgSticker}
          alt='omgSticker'
          className={styles.omgSticker}
        />
        <h1>
          <a
            href='#home'
            className={styles.titleLink}
          >
            MARVEL <small style={{ fontSize: '65%' }}>portal</small>
          </a>
        </h1>

        <nav>
          <ul className='d-flex gap-1 align-items-center'>
            <li>
              <a
                href='#characters'
                className={styles.link}
              >
                Characters
              </a>
            </li>
            {' / '}
            <li>
              <a
                href='#comics'
                className={styles.link}
              >
                Comics
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
