import { rest } from 'msw'
import allCharsJson from '../../__fixtures/api/allCharacters.json'
import allCharsOffset315Json from '../../__fixtures/api/allCharactersOffset315.json'
import { BASE_MARVEL_URL } from '../../constants'

export const handlers = [
  rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
    const offset = req.url.searchParams.get('offset')

    if (!offset || offset === '0') {
      return res(ctx.json(allCharsJson))
    } else {
      return res(ctx.json(allCharsOffset315Json))
    }
  }),
]
