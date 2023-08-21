import { useCallback, useEffect, useMemo, useState } from 'react'
import { validateError } from '../utils'

/**
 * @param {() => Promise} cbLikePromise
 * @param {any[]} deps
 */
export const useFetch = (cbLikePromise, deps) => {
  const [responseData, setResponseData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isInitialFetching, setIsInitialFetching] = useState(true)

  const handleError = err => {
    setIsLoading(false)
    setIsError(true)
    setErrorMsg(validateError(err))
  }

  const fetchData = useCallback(() => {
    setIsLoading(true)

    cbLikePromise()
      .then(res => {
        setResponseData(res)
        setIsLoading(false)
        setIsError(false)
        setErrorMsg('')
        setIsInitialFetching(false)
      })
      .catch(handleError)
  }, [cbLikePromise])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const responseDataMemo = useMemo(() => responseData, [isLoading])
  const reFetch = useCallback(() => fetchData(), [fetchData])

  return {
    responseData: responseDataMemo,
    isLoading,
    isError,
    errorMsg,
    isInitialFetching,
    reFetch,
  }
}
