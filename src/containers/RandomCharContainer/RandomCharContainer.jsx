import React, { useEffect, useState } from 'react'
import CallToActionBox from '../../components/CallToActionBox'
import RandomChar from '../../components/RandomChar'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { marvelService } from '../../services/marvelService'
import { randomCharId, validateError } from '../../utils'
import styles from './RandomCharContainer.module.css'

const RandomCharContainer = () => {
  const [char, setChar] = useState(null) // TODO: add types
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [shouldUpdate, setShouldUpdate] = useState(true)

  const handleUpdate = () => setShouldUpdate(true)

  const handleError = err => {
    setIsLoading(false)
    setIsError(true)
    setErrorMsg(validateError(err))
    setShouldUpdate(false)
  }

  // fetch random char on mounting & update with handler
  useEffect(() => {
    if (!shouldUpdate) return

    setIsLoading(true)
    marvelService
      .getAllChars({ limit: 1, offset: randomCharId() })
      .then(res => {
        // @ts-ignore
        setChar(res.data?.results?.at(0))
        setIsLoading(false)
        setIsError(false)
        setShouldUpdate(false)
      })
      .catch(err => handleError(err))
  }, [shouldUpdate])

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
