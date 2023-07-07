import { rest } from 'msw'
import allCharsJson from '../../__fixtures/api/allCharacters.json'
import { BASE_MARVEL_URL } from '../../constants'

export const handlers = [
  rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
    return res(ctx.json(allCharsJson))
  }),
]
