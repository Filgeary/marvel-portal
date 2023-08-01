import type { PartialDeep, Simplify } from 'type-fest'

export type IComicDataWrapper = Simplify<
  PartialDeep<{
    code: number
    status: string
    copyright: string
    attributionText: string
    attributionHTML: string
    data: IComicDataContainer
    etag: string
  }>
>

interface IComicDataContainer {
  offset: number
  limit: number
  total: number
  count: number
  results: IComic[]
}

export type IComic = Simplify<
  PartialDeep<{
    id: number
    digitalId: number
    title: string
    issueNumber: number
    variantDescription: string
    description: string
    modified: Date
    isbn: string
    upc: string
    diamondCode: string
    ean: string
    issn: string
    format: string
    pageCount: number
    textObjects: TextObject[]
    resourceURI: string
    urls: Url[]
    series: SeriesSummary
    variants: ComicSummary[]
    collections: Collection[]
    collectedIssues: CollectedIssue[]
    dates: ComicDate[]
    prices: ComicPrice[]
    thumbnail: Thumbnail
    images: Image[]
    creators: Creators
    characters: Characters
    stories: Stories
    events: Events
  }>
>

interface TextObject {
  type: string
  language: string
  text: string
}

interface Url {
  type: string
  url: string
}

interface SeriesSummary {
  resourceURI: string
  name: string
}

interface ComicSummary {
  resourceURI: string
  name: string
}

interface Collection {
  resourceURI: string
  name: string
}

interface CollectedIssue {
  resourceURI: string
  name: string
}

interface ComicDate {
  type: string
  date: Date
}

interface ComicPrice {
  type: string
  price: number
}

interface Thumbnail {
  path: string
  extension: string
}

interface Image {
  path: string
  extension: string
}

interface Creators {
  available: number
  returned: number
  collectionURI: string
  items: CreatorSummary[]
}

interface CreatorSummary {
  resourceURI: string
  name: string
  role: string
}

interface Characters {
  available: number
  returned: number
  collectionURI: string
  items: CharacterSummary[]
}

interface CharacterSummary {
  resourceURI: string
  name: string
  role: string
}

interface Stories {
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

interface Events {
  available: number
  returned: number
  collectionURI: string
  items: EventSummary[]
}

interface EventSummary {
  resourceURI: string
  name: string
}
