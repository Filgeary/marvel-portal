import { BASE_MARVEL_URL, MARVEL_PUBLIC_KEY } from '../constants'

const getData = async (path, params = {}) => {
  const searchParams = new URLSearchParams(params)
  searchParams.append('apikey', MARVEL_PUBLIC_KEY)
  const endpoint = BASE_MARVEL_URL + path + '?' + searchParams.toString()

  try {
    const res = await fetch(endpoint)

    if (!res.ok) {
      if (res.status >= 400) {
        const result = await res.json()
        throw new Error(JSON.stringify(result))
      }

      throw new Error(
        `Fetch failed\n url: ${endpoint}\n status: ${res.status}\n statusText: ${res.statusText}`,
      )
    }

    return await res.json()
  } catch (err) {
    throw err
  }
}

export const marvelService = {
  getCharacters: async params => {
    return await getData('/characters', params)
  },

  getCharacterById: async id => {
    return await getData(`/characters/${id}`)
  },
}
