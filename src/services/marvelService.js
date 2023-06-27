const apiKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY ?? ''
const baseUrl = 'https://gateway.marvel.com/v1/public'

const getData = async (url = '', params = {}) => {
  const searchParams = new URLSearchParams(params)
  searchParams.append('apikey', apiKey)
  const endpoint = baseUrl + url + '?' + searchParams.toString()

  try {
    const res = await fetch(endpoint)

    if (!res.ok) {
      throw new Error(
        `Fetch failed\n url: ${endpoint}\n status: ${res.status}\n statusText: ${res.statusText}`,
      )
    }

    return await res.json()
  } catch (err) {
    console.error(err)
  }
}

export const marvelService = {
  getAllChars: async (params = {}) => {
    return await getData('/characters', params)
  },

  getCharacter: async id => {
    return await getData(`/characters/${id}`)
  },
}
