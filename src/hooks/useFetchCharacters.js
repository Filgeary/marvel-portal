import { marvelService } from '../services/marvelService'
import { useFetch } from './useFetch'

/**
 * @param {import("../services/marvelService").AllCharsParams} queryParams
 */
export const useFetchCharacters = queryParams => {
  return useFetch(
    () => marvelService.getAllChars(queryParams),
    [queryParams.offset, queryParams.limit],
  )
}
