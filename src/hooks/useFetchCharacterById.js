import { marvelService } from '../services/marvelService'
import { useFetch } from './useFetch'

/**
 * @param {string} id
 */
export const useFetchCharacterById = id => {
  return useFetch(() => marvelService.getCharacterById(+id), [id])
}
