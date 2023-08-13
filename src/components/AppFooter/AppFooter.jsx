import React from 'react'
import styles from './AppFooter.module.css'

const AppFooter = () => {
  return (
    <footer
      className={styles.footer}
      data-testid='appFooter'
    >
      <div className='container'>
        <section className='pl-0'>
          <h2 className='mb-2'>Project Info</h2>
          <p>Developed by Filgeary</p>
          <p>Data provided by Marvel. © 2023 MARVEL</p>
        </section>
      </div>
    </footer>
  )
}

export default AppFooter
