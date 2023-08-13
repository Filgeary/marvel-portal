import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import ComicProfileContainer from '../../containers/ComicProfileContainer'
// import styles from './SingleComicPage.module.css'

const SingleComicPage = () => {
  const { id } = useParams()

  return (
    <div
      data-testid='singleComicPage'
      className='container'
    >
      <ErrorBoundary>{id && <ComicProfileContainer id={id} />}</ErrorBoundary>
    </div>
  )
}

export default SingleComicPage
