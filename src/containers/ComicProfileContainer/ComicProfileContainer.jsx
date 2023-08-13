import React from 'react'
import ComicProfile from '../../components/ComicProfile'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { useFetchComicById } from '../../hooks/useFetchComicById'
// import styles from './ComicProfileContainer.module.css'

/**
 * @param {object} props
 * @param {number} props.id
 */
const ComicProfileContainer = ({ id }) => {
  const { responseData, isLoading, isError, errorMsg } = useFetchComicById(String(id))

  // @ts-ignore
  const comic = responseData?.data?.results?.at(0) // TODO: add types

  return (
    <div style={{ minHeight: 250 }}>
      {isLoading && <Spinner />}
      {isError && <ErrorMessage text={errorMsg} />}
      {!isError && !isLoading && <ComicProfile comic={comic} />}
    </div>
  )
}

export default ComicProfileContainer
