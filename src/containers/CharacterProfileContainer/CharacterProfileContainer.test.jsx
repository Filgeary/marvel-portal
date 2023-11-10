import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import React from 'react'
import { BASE_MARVEL_URL } from '../../constants'
import { server } from '../../test/mocks/server'
import CharacterProfileContainer from './CharacterProfileContainer'

const initRender = (id = '1011299') => {
  render(<CharacterProfileContainer id={id} />)
}

describe('CharacterProfileContainer', () => {
  it('should make initial fetch & render Character Profile', async () => {
    initRender()

    // initial spinner
    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    // wait loading data
    await screen.findByTestId('characterProfile')

    expect(screen.getByRole('heading', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /guardians of the galaxy/i })).toBeInTheDocument()

    // full description
    expect(
      screen.getByText(
        /a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space\. the team also includes drax, gamora, groot and rocket raccoon!/i,
      ),
    ).toBeInTheDocument()

    // check for unmounting spinner
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()

    // check for no error
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()
  })

  it('should handle known server errors', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/characters/1011299`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server Error' }))
      }),
    )
    initRender()

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /server error/i })).toBeInTheDocument()
  })
})
