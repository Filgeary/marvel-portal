import uniqBy from 'lodash/uniqBy'
import React, { useState } from 'react'
import CharInfo from '../../components/CharInfo'
import CharList from '../../components/CharList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { PAGE_LIMIT_CHAR } from '../../constants'
import { useFetchCharacters } from '../../hooks/useFetchCharacters'
import styles from './CharListContainer.module.css'

const charListInitial = []

const CharListContainer = () => {
  const [selectedChar, setSelectedChar] = useState(null) // TODO: add types
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
    setSelectedChar(selectedChar)
  }

  const handleLoadMore = () => {
    setPageOffset(prevState => prevState + PAGE_LIMIT_CHAR)
  }

  const hasMoreChars = total - offset - count > 0

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div style={{ minHeight: 250 }}>
          {isLoading && isInitialFetching && <Spinner />}
          {isError && <ErrorMessage text={errorMsg} />}
          {!isError && !isInitialFetching && (
            <CharList
              charList={charList}
              onSelectChar={id => handleSelectChar(id)}
              onLoadMore={handleLoadMore}
              isLoading={isLoading}
              hasMoreChars={hasMoreChars}
            />
          )}
        </div>

        <CharInfo char={selectedChar} />
      </div>
    </div>
  )
}

export default CharListContainer
