import React from 'react'
import ComicsBanner from '../../components/ComicsBanner'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import ComicsListContainer from '../../containers/ComicsListContainer'
// import styles from './ComicsPage.module.css'

const ComicsPage = () => {
  return (
    <div className='container d-grid gap-5'>
      <ComicsBanner />

      <ErrorBoundary>
        <ComicsListContainer />
      </ErrorBoundary>
    </div>
  )
}

export default ComicsPage
