import React from 'react'
import AppHeader from '../components/AppHeader'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main style={{ background: '#ddd' }}>
        <div className='container'>
          <section>
            <h2>Main Content</h2>
            <h3>HULK</h3>
            <h3>CALYPSO</h3>
            <h3>LOKI</h3>
          </section>
        </div>
      </main>

      <footer style={{ color: 'var(--cra-font-light)', background: 'var(--cra-bg-dark)' }}>
        <div className='container'>
          <section>
            <h2 className='mb-2'>Project Info</h2>
            <p>Developed by Filgeary</p>
            <p>Data provided by Marvel. © 2023 MARVEL</p>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default App
