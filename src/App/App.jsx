import React from 'react'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import RandomCharContainer from '../containers/RandomCharContainer'
import styles from './App.module.css'

import CharListContainer from '../containers/CharListContainer'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main className={styles.main}>
        <RandomCharContainer />
        <CharListContainer />
      </main>

      <AppFooter />
    </div>
  )
}

export default App
