import type { ICharacter } from '../types/ICharacter'

type TCharacter = Partial<ICharacter>

export declare const marvelService: {
  getAllChars: (params?: {}) => Promise<any>
  getCharacter: (id?: number) => Promise<TCharacter>
}
