import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import CharacterProfileContainer from '../../containers/CharacterProfileContainer'
// import styles from './SingleCharacterPage.module.css'

const SingleCharacterPage = () => {
  const { id } = useParams()

  return (
    <div
      data-testid='singleCharacterPage'
      className='container'
    >
      <ErrorBoundary>{id && <CharacterProfileContainer id={id} />} </ErrorBoundary>
    </div>
  )
}

export default SingleCharacterPage
