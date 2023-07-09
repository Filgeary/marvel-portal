import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import React from 'react'
import { BASE_MARVEL_URL } from '../../constants'
import { server } from '../../test/mocks/server'
import RandomCharContainer from './RandomCharContainer'

describe('RandomCharContainer', () => {
  it('should make initial fetch & render Random Character', async () => {
    render(<RandomCharContainer />)

    // initial spinner
    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    // wait loading data
    await screen.findByRole('heading', { name: /guardians of the galaxy/i })

    // check for unmounting spinner
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()

    // check for no error
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()

    expect(screen.getByRole('img', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /detail/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wiki/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /comiclink/i })).toBeInTheDocument()
    expect(
      screen.getByText(
        /a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space\. the team also includes drax, gamora, groot and rocket raccoon!/i,
      ),
    ).toBeInTheDocument()

    // check CallToActionBox
    expect(
      screen.getByRole('heading', {
        name: /random character for today! do you wanna know them better\?/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /try it!/i })).toBeInTheDocument()
  })

  it('should handle known server errors & handle response with certain json props', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server Error' }))
      }),
    )
    render(<RandomCharContainer />)

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /server error/i })).toBeInTheDocument()
  })

  it('should handle response with unknown json props', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ randomMessage: 'Server Error' }))
      }),
    )
    render(<RandomCharContainer />)

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /Unknown Error!/i })).toBeInTheDocument()
  })

  it('should handle unknown server errors', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
        return res(ctx.status(301), ctx.json({ message: 'Server Error' }))
      }),
    )
    render(<RandomCharContainer />)

    await screen.findByTestId('errorMessage')
    expect(
      screen.getByRole('heading', { name: /status: 301 statusText: Moved Permanently/i }),
    ).toBeInTheDocument()
  })

  it('should click on button & update character', async () => {
    render(<RandomCharContainer />)

    // check initial fetching flow
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
    await screen.findByRole('heading', { name: /guardians of the galaxy/i })

    // update character via click
    screen.getByRole('button', { name: /try it!/i }).click()
    await screen.findByTestId('spinner')
    await screen.findByRole('heading', { name: /guardians of the galaxy/i })
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()
  })
})
