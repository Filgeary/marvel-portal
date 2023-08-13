import { rest } from 'msw'
import charactersJson from '../../__fixtures/api/characters.json'
import charactersByOffset315Json from '../../__fixtures/api/charactersByOffset315.json'
import comicByIdJson from '../../__fixtures/api/comicById.json'
import comicsJson from '../../__fixtures/api/comics.json'
import comicsByOffset147Json from '../../__fixtures/api/comicsByOffset147.json'
import { BASE_MARVEL_URL } from '../../constants'

export const handlers = [
  rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
    const offset = req.url.searchParams.get('offset')

    if (!offset || offset === '0') {
      return res(ctx.json(charactersJson))
    } else {
      return res(ctx.json(charactersByOffset315Json))
    }
  }),
  rest.get(`${BASE_MARVEL_URL}/comics`, (req, res, ctx) => {
    const offset = req.url.searchParams.get('offset')

    if (!offset || offset === '0') {
      return res(ctx.json(comicsJson))
    } else {
      return res(ctx.json(comicsByOffset147Json))
    }
  }),
  rest.get(`${BASE_MARVEL_URL}/comics/95790`, (req, res, ctx) => {
    return res(ctx.json(comicByIdJson))
  }),
]
