export type SearchParamsComics = Partial<{
  format:
    | 'comic'
    | 'magazine'
    | 'trade paperback'
    | 'hardcover'
    | 'digest'
    | 'graphic novel'
    | 'digital comic'
    | 'infinite comic'
  formatType: 'comic' | 'collection'
  noVariants: boolean
  dateDescriptor: 'lastWeek' | 'thisWeek' | 'nextWeek' | 'thisMonth'
  // Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02)
  dateRange: string
  title: string
  titleStartsWith: string
  startYear: number
  issueNumber: number
  diamondCode: string
  digitalId: number
  upc: string
  isbn: string
  ean: string
  issn: string
  hasDigitalIssue: boolean
  modifiedSince: Date
  // Accepts a comma-separated list of ids
  creators: number
  // Accepts a comma-separated list of ids
  characters: number
  // Accepts a comma-separated list of ids
  series: number
  // Accepts a comma-separated list of ids
  events: number
  // Accepts a comma-separated list of ids
  stories: number
  // Accepts a comma-separated list of characters ids
  sharedAppearances: number
  // Accepts a comma-separated list of creators ids
  collaborators: number
  orderBy:
    | 'focDate'
    | 'onsaleDate'
    | 'title'
    | 'issueNumber'
    | 'modified'
    | '-focDate'
    | '-onsaleDate'
    | '-title'
    | '-issueNumber'
    | '-modified'
  limit: number
  offset: number
}>
