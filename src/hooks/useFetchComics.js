import { marvelService } from '../services/marvelService'
import { useFetch } from './useFetch'

/**
 * @param {import('../types/SearchParamsComics').SearchParamsComics} queryParams
 */
export const useFetchComics = queryParams => {
  return useFetch(
    () => marvelService.getComics(queryParams),
    [queryParams.offset, queryParams.limit],
  )
}
