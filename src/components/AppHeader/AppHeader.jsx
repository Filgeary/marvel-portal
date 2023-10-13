import cn from 'clsx'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
          <Link
            to='/'
            className={styles.titleLink}
          >
            MARVEL <small style={{ fontSize: '65%' }}>portal</small>
          </Link>
        </h1>

        <nav>
          <ul className='d-flex gap-1 align-items-center'>
            <li className={styles.navListItem}>
              <NavLink
                to='/characters'
                data-testid='navLink-characters'
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--cra-font-light)' : '',
                })}
              >
                Characters
              </NavLink>
              <span className='pl-05'>/</span>
            </li>

            <li className={styles.navListItem}>
              <NavLink
                to='/comics'
                data-testid='navLink-comics'
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--cra-font-light)' : '',
                })}
              >
                Comics
              </NavLink>
              <span className='pl-05'>/</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
