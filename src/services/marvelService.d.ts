import type { ICharacterDataWrapper } from '../types/ICharacter'

export type AllCharsParams = Partial<{
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
  getCharacters: (params?: AllCharsParams) => Promise<ICharacterDataWrapper>
  getCharacterById: (id: number) => Promise<ICharacterDataWrapper>
}
