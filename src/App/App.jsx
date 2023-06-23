import React from 'react'
import AppHeader from '../components/AppHeader'
import RandomChar from '../components/RandomChar'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main style={{ padding: '40px 0', background: '#ddd' }}>
        <RandomChar />
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
