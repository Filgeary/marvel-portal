import React from 'react'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import CharListContainer from '../../containers/CharListContainer'
// import styles from './CharactersPage.module.css'

const CharactersPage = () => {
  return (
    <ErrorBoundary>
      <CharListContainer />
    </ErrorBoundary>
  )
}

export default CharactersPage
