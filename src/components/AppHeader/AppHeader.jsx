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
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--cra-font-light)' : 'var(--cra-bg-dark)',
                  borderBottom: isActive ? '2px solid var(--cra-font-light)' : 'none',
                })}
              >
                Characters
              </NavLink>
              <span style={{ paddingLeft: '0.5rem' }}>/</span>
            </li>

            <li className={styles.navListItem}>
              <NavLink
                to='/comics'
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--cra-font-light)' : 'var(--cra-bg-dark)',
                  borderBottom: isActive ? '2px solid var(--cra-font-light)' : 'none',
                })}
              >
                Comics
              </NavLink>
              <span style={{ paddingLeft: '0.5rem' }}>/</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
