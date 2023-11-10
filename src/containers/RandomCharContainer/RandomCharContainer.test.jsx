import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { BASE_MARVEL_URL } from '../../constants'
import { server } from '../../test/mocks/server'
import RandomCharContainer from './RandomCharContainer'

const initRender = () => {
  render(
    <MemoryRouter>
      <RandomCharContainer />
    </MemoryRouter>,
  )
}

describe('RandomCharContainer', () => {
  it('should make initial fetch & render Random Character', async () => {
    initRender()

    // initial spinner
    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    // wait loading data
    await screen.findByTestId('randomCharTitle')

    // check for unmounting spinner
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()

    // check for no error
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()

    expect(screen.getByTestId('randomChar-thumbnail')).toBeInTheDocument()
    expect(screen.getByTestId('randomChar-description')).toBeInTheDocument()

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
    initRender()

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /server error/i })).toBeInTheDocument()
  })

  it('should handle response with unknown json props', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ randomMessage: 'Server Error' }))
      }),
    )
    initRender()

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /Unknown Error!/i })).toBeInTheDocument()
  })

  it('should handle unknown server errors', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/characters`, (req, res, ctx) => {
        return res(ctx.status(301), ctx.json({ message: 'Server Error' }))
      }),
    )
    initRender()

    await screen.findByTestId('errorMessage')
    expect(
      screen.getByRole('heading', { name: /status: 301 statusText: Moved Permanently/i }),
    ).toBeInTheDocument()
  })

  it('should click on button & update character', async () => {
    initRender()

    // check initial fetching flow
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
    await screen.findByTestId('randomCharTitle')

    // update character via click
    userEvent.click(screen.getByRole('button', { name: /try it!/i }))
    await screen.findByTestId('spinner')
    await screen.findByTestId('randomCharTitle')
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()
  })
})
