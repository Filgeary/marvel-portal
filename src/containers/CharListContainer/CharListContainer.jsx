import uniqBy from 'lodash/uniqBy'
import React, { useState } from 'react'
import CharList from '../../components/CharList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { PAGE_LIMIT_CHAR } from '../../constants'
import { useFetchCharacters } from '../../hooks/useFetchCharacters'
// import styles from "./CharListContainer.module.css"

const charListInitial = []

/**
 * @param {object} props
 * @param {(char: any) => void} props.onSelectChar // TODO: add types
 */
const CharListContainer = ({ onSelectChar }) => {
  const [pageOffset, setPageOffset] = useState(0)

  const { responseData, isLoading, isError, errorMsg, isInitialFetching } = useFetchCharacters({
    limit: PAGE_LIMIT_CHAR,
    offset: pageOffset,
  })

  // TODO: add types
  // @ts-ignore
  const { results = [], offset = 0, count = 0, total = 0 } = responseData?.data ?? {}

  // make infinite adding of new chars
  charListInitial.push(...results)
  const charList = uniqBy(charListInitial, 'id')

  const handleSelectChar = id => {
    const selectedChar = charList?.find(char => char.id === id)
    onSelectChar(selectedChar)
  }

  const handleLoadMore = () => {
    setPageOffset(prevState => prevState + PAGE_LIMIT_CHAR)
  }

  const hasMoreChars = total - offset - count > 0

  return (
    <div style={{ minHeight: 250 }}>
      {isLoading && isInitialFetching && <Spinner />}
      {isError && <ErrorMessage text={errorMsg} />}
      {!isError && !isInitialFetching && (
        <CharList
          charList={charList}
          onSelectChar={handleSelectChar}
          onLoadMore={handleLoadMore}
          isLoading={isLoading}
          hasMoreChars={hasMoreChars}
        />
      )}
    </div>
  )
}

export default CharListContainer
