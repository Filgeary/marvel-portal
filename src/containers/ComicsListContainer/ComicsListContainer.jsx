import uniqBy from 'lodash/uniqBy'
import React, { useEffect, useState } from 'react'
import ComicsList from '../../components/ComicsList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { PAGE_LIMIT_COMIC } from '../../constants'
import { useFetchComics } from '../../hooks/useFetchComics'
// import styles from './ComicsListContainer.module.css'

const ComicsListContainer = () => {
  const [comicsList, setComicsList] = useState([]) // TODO: add types
  const [isUpdatedData, setIsUpdatedData] = useState(false)
  const [pageOffset, setPageOffset] = useState(0)

  const { responseData, isLoading, isError, errorMsg, isInitialFetching } = useFetchComics({
    limit: PAGE_LIMIT_COMIC,
    offset: pageOffset,
  })

  // TODO: add types
  // @ts-ignore
  const { results = [], offset, count, total } = responseData?.data ?? {}

  useEffect(() => {
    // @ts-ignore
    setComicsList(prev => [...prev, ...results])
    setIsUpdatedData(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  const uniqedComicsList = uniqBy(comicsList, 'id')

  const handleLoadMore = () => {
    setPageOffset(prev => prev + PAGE_LIMIT_COMIC)
    setIsUpdatedData(false)
  }

  const hasMoreComics = total - offset - count > 0

  return (
    <div style={{ minHeight: 250 }}>
      {isLoading && isInitialFetching && <Spinner />}
      {isError && <ErrorMessage text={errorMsg} />}
      {!isError && !isInitialFetching && (
        <>
          <ComicsList
            comicsList={uniqedComicsList}
            onLoadMore={handleLoadMore}
            isLoading={isLoading}
            hasMoreComics={hasMoreComics}
          />
          {isUpdatedData && <h3 className='visually-hidden'>Data is updated</h3>}
        </>
      )}
    </div>
  )
}

export default ComicsListContainer
