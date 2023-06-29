export interface ICharacterDataWrapper {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: ICharacterData
  etag: string
}

interface ICharacterData {
  offset: number
  limit: number
  total: number
  count: number
  results: ICharacter[]
}

interface ICharacter {
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
}

interface Url {
  type: string
  url: string
}

interface Thumbnail {
  path: string
  extension: string
}

interface ComicList {
  available: number
  returned: number
  collectionURI: string
  items: ComicSummary[]
}

interface ComicSummary {
  resourceURI: string
  name: string
}

interface StoryList {
  available: number
  returned: number
  collectionURI: string
  items: StorySummary[]
}

interface StorySummary {
  resourceURI: string
  name: string
  type: string
}

interface EventList {
  available: number
  returned: number
  collectionURI: string
  items: EventSummary[]
}

interface EventSummary {
  resourceURI: string
  name: string
}

interface SeriesList {
  available: number
  returned: number
  collectionURI: string
  items: SeriesSummary[]
}

interface SeriesSummary {
  resourceURI: string
  name: string
}
