import React from 'react'
import CharacterProfile from '../../components/CharacterProfile'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { useFetchCharacterById } from '../../hooks/useFetchCharacterById'

// import styles from './CharacterProfileContainer.module.css'

/**
 * @param {object} props
 * @param {string} props.id
 */
const CharacterProfileContainer = ({ id }) => {
  const { responseData, isLoading, isError, errorMsg } = useFetchCharacterById(id)

  // @ts-ignore
  const character = responseData?.data?.results?.at(0) // TODO: add types

  return (
    <div style={{ minHeight: 250 }}>
      {isLoading && <Spinner />}
      {isError && <ErrorMessage text={errorMsg} />}
      {!isError && !isLoading && <CharacterProfile character={character} />}
    </div>
  )
}

export default CharacterProfileContainer
