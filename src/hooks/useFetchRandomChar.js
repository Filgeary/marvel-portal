import { marvelService } from '../services/marvelService'
import { useFetch } from './useFetch'

/**
 * @param {import("../types/SearchParamsCharacters").SearchParamsCharacters} queryParams
 */
export const useFetchRandomChar = queryParams => {
  return useFetch(
    () => marvelService.getCharacters(queryParams),
    [queryParams.offset, queryParams.limit],
  )
}
