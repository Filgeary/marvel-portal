export const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY ?? ''
export const BASE_MARVEL_URL = 'https://gateway.marvel.com/v1/public'

export const API_TOTAL_CHARACTERS = 1562
export const PAGE_LIMIT_CHAR = 18
export const PAGE_LIMIT_COMIC = 24

export const IMAGE_VARIANT = {
  // standard (square)
  '250x250': '/standard_fantastic',
  '200x200': '/standard_xlarge',
  '140x140': '/standard_large',

  // Portrait aspect ratio
  '300x450': '/portrait_uncanny',
  '216x324': '/portrait_incredible',
  '168x252': '/portrait_fantastic',
}
