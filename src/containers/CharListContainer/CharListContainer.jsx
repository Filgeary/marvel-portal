import uniqBy from 'lodash/uniqBy'
import React, { useEffect, useState } from 'react'
import CharList from '../../components/CharList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { PAGE_LIMIT_CHAR } from '../../constants'
import { useFetchCharacters } from '../../hooks/useFetchCharacters'
import { filterCharactersWithImages } from '../../utils'
// import styles from "./CharListContainer.module.css"

/**
 * @param {object} props
 * @param {(char: any) => void} props.onSelectChar // TODO: add types
 * @param {boolean} props.shouldFilterWithImages
 */
const CharListContainer = ({ onSelectChar, shouldFilterWithImages }) => {
  const [charList, setCharList] = useState([]) // TODO: add types
  const [isUpdatedData, setIsUpdatedData] = useState(false)
  const [pageOffset, setPageOffset] = useState(0)

  const { responseData, isLoading, isError, errorMsg, isInitialFetching } = useFetchCharacters({
    limit: PAGE_LIMIT_CHAR,
    offset: pageOffset,
  })

  // TODO: add types
  // @ts-ignore
  const { results = [], offset, count, total } = responseData?.data ?? {}
  const filteredChars = shouldFilterWithImages ? filterCharactersWithImages(results) : results

  useEffect(() => {
    // @ts-ignore
    setCharList(prev => [...prev, ...filteredChars])
    setIsUpdatedData(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  const uniqedCharList = uniqBy(charList, 'id')

  const handleSelectChar = id => {
    const selectedChar = uniqedCharList?.find(char => char.id === id)
    onSelectChar(selectedChar)
  }

  const handleLoadMore = () => {
    setPageOffset(prevState => prevState + PAGE_LIMIT_CHAR)
    setIsUpdatedData(false)
  }

  const hasMoreChars = total - offset - count > 0

  return (
    <div style={{ minHeight: 250 }}>
      {isLoading && isInitialFetching && <Spinner />}
      {isError && <ErrorMessage text={errorMsg} />}
      {!isError && !isInitialFetching && (
        <>
          <CharList
            charList={uniqedCharList}
            onSelectChar={handleSelectChar}
            onLoadMore={handleLoadMore}
            isLoading={isLoading}
            hasMoreChars={hasMoreChars}
          />
          {isUpdatedData && <h3 className='visually-hidden'>Data is updated</h3>}
        </>
      )}
    </div>
  )
}

export default CharListContainer
