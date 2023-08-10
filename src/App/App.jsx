import React from 'react'
import ComicsBanner from '../components/ComicsBanner'
import ErrorBoundary from '../components/_shared/ErrorBoundary'
import CharListContainer from '../containers/CharListContainer'
import ComicsListContainer from '../containers/ComicsListContainer'
import RandomCharContainer from '../containers/RandomCharContainer'
import AppLayout from '../layout/AppLayout'

const App = () => {
  return (
    <AppLayout>
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
    </AppLayout>
  )
}

export default App
