import React from 'react'
import ComicsBanner from '../components/ComicsBanner'
import ErrorBoundary from '../components/_shared/ErrorBoundary'
import CharListContainer from '../containers/CharListContainer'
import ComicsListContainer from '../containers/ComicsListContainer'
import AppLayout from '../layout/AppLayout'
import HomePage from '../pages/HomePage'

const App = () => {
  return (
    <AppLayout>
      <div className='container d-grid gap-5'>
        <ComicsBanner />

        <ErrorBoundary>
          <ComicsListContainer />
        </ErrorBoundary>
      </div>

      <HomePage />

      <ErrorBoundary>
        <CharListContainer />
      </ErrorBoundary>
    </AppLayout>
  )
}

export default App
