import React from 'react'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import CharListContainer from '../../containers/CharListContainer'
// import styles from './CharactersPage.module.css'

const CharactersPage = () => {
  return (
    <div className='container d-grid align-items-start gap-4'>
      <h1 className='text-gradient line-height-1'>Characters</h1>

      <ErrorBoundary>
        <CharListContainer />
      </ErrorBoundary>
    </div>
  )
}

export default CharactersPage
