import _uniqBy from 'lodash/uniqBy'
import React, { useEffect, useState } from 'react'
import CharInfo from '../../components/CharInfo'
import CharList from '../../components/CharList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { CHAR_PAGE_LIMIT } from '../../constants'
import { marvelService } from '../../services/marvelService'
import { validateError } from '../../utils'
import styles from './CharListContainer.module.css'

const CharListContainer = () => {
  const [charList, setCharList] = useState(null) // TODO: add types
  const [selectedChar, setSelectedChar] = useState(null) // TODO: add types
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isInitialFetching, setIsInitialFetching] = useState(true)
  const [paginationData, setPaginationData] = useState({
    offset: 0,
    count: 0,
    total: 0,
  })

  const handleError = err => {
    setIsLoading(false)
    setIsError(true)
    setErrorMsg(validateError(err))
  }

  const handleUpdate = (offset = 0, limit = CHAR_PAGE_LIMIT) => {
    setIsLoading(true)

    marvelService
      .getAllChars({ limit, offset })
      .then(res => {
        const { results = [], offset = 0, count = 0, total = 0 } = res.data ?? {}

        // to prevent duplicating in strict mode
        // @ts-ignore
        setCharList(prevState => _uniqBy([...(prevState ?? []), ...results], 'id'))
        setIsLoading(false)
        setIsError(false)
        setIsInitialFetching(false)
        setPaginationData({ offset, count, total })
      })
      .catch(err => handleError(err))
  }

  // only run on mounting
  useEffect(() => {
    handleUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelectChar = id => {
    // @ts-ignore
    const selectedChar = charList?.find(char => char.id === id)
    setSelectedChar(selectedChar)
  }

  const { offset, count, total } = paginationData
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
              onLoadMore={() => handleUpdate(offset + CHAR_PAGE_LIMIT)}
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
