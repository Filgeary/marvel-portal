import { marvelService } from '../services/marvelService'
import { useFetch } from './useFetch'

/**
 * @param {string} id
 */
export const useFetchComicById = id => {
  return useFetch(() => marvelService.getComicById(+id), [id])
}
