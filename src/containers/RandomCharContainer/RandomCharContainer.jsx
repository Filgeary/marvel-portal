import React, { useState } from 'react'
import CallToActionBox from '../../components/CallToActionBox'
import RandomChar from '../../components/RandomChar'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { useFetchRandomChar } from '../../hooks/useFetchRandomChar'
import { filterCharactersWithImages, randomCharId } from '../../utils'
import styles from './RandomCharContainer.module.css'

const RandomCharContainer = () => {
  const [offset, setOffset] = useState(() => randomCharId())
  const { responseData, isLoading, isError, errorMsg } = useFetchRandomChar({ limit: 20, offset })
  // @ts-ignore
  const results = responseData?.data?.results // TODO: add types
  const char = filterCharactersWithImages(results)?.at(0)

  const handleUpdate = () => setOffset(randomCharId())

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div style={{ minHeight: 250 }}>
          {isLoading && <Spinner />}
          {isError && <ErrorMessage text={errorMsg} />}
          {!isError && !isLoading && <RandomChar char={char} />}
        </div>

        <CallToActionBox onClickActionButton={handleUpdate} />
      </div>
    </div>
  )
}

export default RandomCharContainer
