import React from 'react'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import ErrorBoundary from '../components/_shared/ErrorBoundary'
import CharListContainer from '../containers/CharListContainer'
import RandomCharContainer from '../containers/RandomCharContainer'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main className={styles.main}>
        <ErrorBoundary>
          <RandomCharContainer />
        </ErrorBoundary>

        <ErrorBoundary>
          <CharListContainer />
        </ErrorBoundary>
      </main>

      <AppFooter />
    </div>
  )
}

export default App
