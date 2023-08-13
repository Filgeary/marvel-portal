import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound404.module.css'
import image404 from './assets/404-error.webp'

const NotFound404 = () => {
  return (
    <section
      data-testid='notFound404'
      style={{ background: 'var(--cra-bg-light)' }}
      className='d-flex flex-column gap-2 align-items-center text-center w-100'
    >
      <img
        src={image404}
        alt='404-error'
        width={512}
        height={512}
      />
      <h2 className={styles.heading}>Not Found Page!</h2>
      <Link to='/'>Go to Home</Link>
    </section>
  )
}

export default NotFound404
