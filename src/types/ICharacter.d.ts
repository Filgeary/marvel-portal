export interface ICharacter {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: Data
  etag: string
}

interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Result[]
}

interface Result {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: Url[]
  thumbnail: Thumbnail
  comics: Comics
  stories: Stories
  events: Events
  series: Series
}

interface Url {
  type: string
  url: string
}

interface Thumbnail {
  path: string
  extension: string
}

interface Comics {
  available: number
  returned: number
  collectionURI: string
  items: ComicsItem[]
}

interface ComicsItem {
  resourceURI: string
  name: string
}

interface Stories {
  available: number
  returned: number
  collectionURI: string
  items: StoriesItem[]
}

interface StoriesItem {
  resourceURI: string
  name: string
  type: string
}

interface Events {
  available: number
  returned: number
  collectionURI: string
  items: EventsItem[]
}

interface EventsItem {
  resourceURI: string
  name: string
}

interface Series {
  available: number
  returned: number
  collectionURI: string
  items: SeriesItem[]
}

interface SeriesItem {
  resourceURI: string
  name: string
}
