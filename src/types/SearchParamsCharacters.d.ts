export type SearchParamsCharacters = Partial<{
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
