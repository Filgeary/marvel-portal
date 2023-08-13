import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import React from 'react'
import { BASE_MARVEL_URL } from '../../constants'
import { server } from '../../test/mocks/server'
import ComicProfileContainer from './ComicProfileContainer'

const initRender = (id = '95790') => {
  render(<ComicProfileContainer id={id} />)
}

describe('ComicProfileContainer', () => {
  it('should make initial fetch & render Comic Profile', async () => {
    initRender()

    // initial spinner
    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    // wait loading data
    await screen.findByTestId('comicProfile')
    expect(
      screen.getByRole('heading', { name: /captain marvel \(2019\) #44/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /captain marvel \(2019\) #44/i })).toBeInTheDocument()

    // check for unmounting spinner
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()

    // check for no error
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()
  })

  it('should handle known server errors', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/comics/95790`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server Error' }))
      }),
    )
    initRender()

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /server error/i })).toBeInTheDocument()
  })
})
