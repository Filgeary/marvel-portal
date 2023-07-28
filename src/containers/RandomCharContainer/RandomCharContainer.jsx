import React, { useState } from 'react'
import CallToActionBox from '../../components/CallToActionBox'
import RandomChar from '../../components/RandomChar'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { useFetchRandomChar } from '../../hooks/useFetchRandomChar'
import { randomCharId } from '../../utils'
import styles from './RandomCharContainer.module.css'

const RandomCharContainer = () => {
  const [offset, setOffset] = useState(() => randomCharId())
  const { responseData, isLoading, isError, errorMsg } = useFetchRandomChar({ limit: 1, offset })

  const handleUpdate = () => setOffset(randomCharId())

  // @ts-ignore
  const char = responseData?.data?.results?.at(0) // TODO: add types

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
