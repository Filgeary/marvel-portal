export type TCharacterDataWrapper = Partial<{
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: TCharacterData
  etag: string
}>

type TCharacterData = Partial<{
  offset: number
  limit: number
  total: number
  count: number
  results: TCharacter[]
}>

export type TCharacter = Partial<{
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: Url[]
  thumbnail: Thumbnail
  comics: ComicList
  stories: StoryList
  events: EventList
  series: SeriesList
}>

type Url = Partial<{
  type: 'detail' | 'wiki' | 'comiclink'
  url: string
}>

type Thumbnail = Partial<{
  path: string
  extension: string
}>

type ComicList = Partial<{
  available: number
  returned: number
  collectionURI: string
  items: ComicSummary[]
}>

type ComicSummary = Partial<{
  resourceURI: string
  name: string
}>

type StoryList = Partial<{
  available: number
  returned: number
  collectionURI: string
  items: StorySummary[]
}>

type StorySummary = Partial<{
  resourceURI: string
  name: string
  type: string
}>

type EventList = Partial<{
  available: number
  returned: number
  collectionURI: string
  items: EventSummary[]
}>

type EventSummary = Partial<{
  resourceURI: string
  name: string
}>

type SeriesList = Partial<{
  available: number
  returned: number
  collectionURI: string
  items: SeriesSummary[]
}>

type SeriesSummary = Partial<{
  resourceURI: string
  name: string
}>
