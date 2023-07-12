import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import React from 'react'
import { BASE_MARVEL_URL } from '../../constants'
import { server } from '../../test/mocks/server'
import CharListContainer from './CharListContainer'

const initRender = () => {
  render(<CharListContainer />)
}

describe('CharListContainer', () => {
  it('should make initial fetch & render CharList', async () => {
    initRender()

    // initial spinner
    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    // wait loading data
    await screen.findByRole('heading', { name: /characters list/i })
    expect(screen.getAllByTestId('charListItem')).toHaveLength(18)

    // check for unmounting spinner
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()

    // check for no error
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()
  })

  it('should handle known server errors', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server Error' }))
      }),
    )
    initRender()

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /server error/i })).toBeInTheDocument()
  })
})
