export const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY ?? ''
export const BASE_MARVEL_URL = 'https://gateway.marvel.com/v1/public'

export const API_TOTAL_CHARACTERS = 1562
export const CHAR_PAGE_LIMIT = 18

export const IMAGE_VARIANT = {
  // standard (square)
  '250x250': '/standard_fantastic',
  '200x200': '/standard_xlarge',
  '140x140': '/standard_large',
}
