import cn from 'clsx'
import React from 'react'
import AppHeader from '../components/AppHeader'
import CharList from '../components/CharList'
import RandomChar from '../components/RandomChar'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main
        style={{ padding: '40px 0', background: '#ddd' }}
        className='d-grid gap-5'
      >
        <RandomChar />

        <div className={cn('container', styles.charListWrapper)}>
          <CharList />
          <section style={{ background: 'var(--cra-bg-light)', position: 'sticky', top: '1.5rem' }}>
            <h2 className='text-center'>Char Info</h2>
          </section>
        </div>
      </main>

      <footer style={{ color: 'var(--cra-font-light)', background: 'var(--cra-bg-dark)' }}>
        <div className='container'>
          <section className='pl-0'>
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
