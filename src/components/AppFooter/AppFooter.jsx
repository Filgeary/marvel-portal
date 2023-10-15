import React from 'react'
import styles from './AppFooter.module.css'

const AppFooter = () => {
  return (
    <footer
      className={styles.footer}
      data-testid='appFooter'
    >
      <div className='container'>
        <section className='p-1 pl-0 d-flex justify-space-between'>
          <h2 className='visually-hidden'>Project Info</h2>
          <p>Data provided by Marvel. © 2023 MARVEL</p>
          <p>
            Developed by{' '}
            <a
              href='https://github.com/Filgeary'
              target='_blank'
              rel='noreferrer noopener'
              className={styles.link}
            >
              Filgeary
            </a>
          </p>
        </section>
      </div>
    </footer>
  )
}

export default AppFooter
