import React from 'react'
import ComicsBanner from '../../components/ComicsBanner'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import ComicsListContainer from '../../containers/ComicsListContainer'
// import styles from './ComicsPage.module.css'

const ComicsPage = () => {
  return (
    <div className='container d-grid gap-5'>
      <ComicsBanner />

      <div className='d-grid align-items-start gap-4'>
        <h1 className='text-gradient line-height-1'>Comics</h1>

        <ErrorBoundary>
          <ComicsListContainer />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default ComicsPage
