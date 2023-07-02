import type { TCharacterDataWrapper } from '../types/TCharacter'

type Params = Partial<{
  name: string
  nameStartsWith: string
  modifiedSince: Date
  comics: number
  series: number
  events: number
  stories: number
  orderBy: 'name' | 'modified' | '-name' | '-modified'
  limit: number
  offset: number
}>

export declare const marvelService: {
  getAllChars: (params?: Params) => Promise<TCharacterDataWrapper>
  getCharacter: (id: number) => Promise<TCharacterDataWrapper>
}
