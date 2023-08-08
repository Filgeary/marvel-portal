import uniqBy from 'lodash/uniqBy'
import React, { useState } from 'react'
import ComicsList from '../../components/ComicsList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { PAGE_LIMIT_COMIC } from '../../constants'
import { useFetchComics } from '../../hooks/useFetchComics'
// import styles from './ComicsListContainer.module.css'

const comicsListInitial = []

const ComicsListContainer = () => {
  const [pageOffset, setPageOffset] = useState(0)

  const { responseData, isLoading, isError, errorMsg, isInitialFetching } = useFetchComics({
    limit: PAGE_LIMIT_COMIC,
    offset: pageOffset,
  })

  // TODO: add types
  // @ts-ignore
  const { results = [], offset = 0, count = 0, total = 0 } = responseData?.data ?? {}

  // make infinite adding of new comics
  comicsListInitial.push(...results)
  const comicsList = uniqBy(comicsListInitial, 'id')

  const handleLoadMore = () => setPageOffset(prev => prev + PAGE_LIMIT_COMIC)

  const hasMoreComics = total - offset - count > 0

  return (
    <div style={{ minHeight: 250 }}>
      {isLoading && isInitialFetching && <Spinner />}
      {isError && <ErrorMessage text={errorMsg} />}
      {!isError && !isInitialFetching && (
        <ComicsList
          comicsList={comicsList}
          onLoadMore={handleLoadMore}
          isLoading={isLoading}
          hasMoreComics={hasMoreComics}
        />
      )}
    </div>
  )
}

export default ComicsListContainer
