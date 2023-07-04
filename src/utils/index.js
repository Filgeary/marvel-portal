import { API_TOTAL_CHARACTERS } from '../constants'

export const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
export const randomCharId = () => randomInt(0, API_TOTAL_CHARACTERS - 1)
