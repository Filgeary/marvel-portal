import { marvelService } from '../services/marvelService'
import { useFetch } from './useFetch'

/**
 * @param {import("../services/marvelService").SearchParamsCharacters} queryParams
 */
export const useFetchRandomChar = queryParams => {
  return useFetch(
    () => marvelService.getCharacters(queryParams),
    [queryParams.offset, queryParams.limit],
  )
}
