import { API_TOTAL_CHARACTERS } from '../constants'

export const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
export const randomCharId = () => randomInt(0, API_TOTAL_CHARACTERS - 1)

export const upperFirstLetter = str => {
  if (typeof str !== 'string') return
  return str.at(0)?.toUpperCase() + str.slice(1).toLowerCase()
}

export const truncateStr = (str, offset) => {
  if (typeof str !== 'string') return
  if (str.length > offset) {
    const lastSpaceIndex = str.slice(0, offset).lastIndexOf(' ')
    return str.slice(0, lastSpaceIndex) + '...'
  }
  return str
}

export const isJSON = text => {
  if (typeof text !== 'string') {
    return false
  }

  try {
    JSON.parse(text)
    return true
  } catch (error) {
    return false
  }
}

export const validateError = err => {
  if (err && err instanceof Error) {
    let obj

    if (isJSON(err.message)) {
      obj = JSON.parse(err.message)
      return obj?.message || obj?.status || 'Unknown Error!'
    }

    return err.message
  }

  return 'Unknown Error!'
}
