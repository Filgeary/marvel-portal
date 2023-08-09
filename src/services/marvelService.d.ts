import type { ICharacterDataWrapper } from '../types/ICharacter'
import type { IComicDataWrapper } from '../types/IComic'
import type { SearchParamsCharacters } from '../types/SearchParamsCharacters'
import type { SearchParamsComics } from '../types/SearchParamsComics'

export declare const marvelService: {
  getCharacters: (params?: SearchParamsCharacters) => Promise<ICharacterDataWrapper>
  getCharacterById: (id: number) => Promise<ICharacterDataWrapper>
  getComics: (params?: SearchParamsComics) => Promise<IComicDataWrapper>
  getComicById: (id: number) => Promise<IComicDataWrapper>
}
