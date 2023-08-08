import React from 'react'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import ComicsBanner from '../components/ComicsBanner'
import ErrorBoundary from '../components/_shared/ErrorBoundary'
import CharListContainer from '../containers/CharListContainer'
import ComicsListContainer from '../containers/ComicsListContainer'
import RandomCharContainer from '../containers/RandomCharContainer'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main className={styles.main}>
        <div className='container d-grid gap-5'>
          <ComicsBanner />

          <ErrorBoundary>
            <ComicsListContainer />
          </ErrorBoundary>
        </div>

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
