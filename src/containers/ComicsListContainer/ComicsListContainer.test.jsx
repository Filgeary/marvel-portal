import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import React from 'react'
import { BASE_MARVEL_URL } from '../../constants'
import { server } from '../../test/mocks/server'
import { renderWithProviders } from '../../test/testUtils'
import ComicsListContainer from './ComicsListContainer'

const initRender = () => {
  renderWithProviders(<ComicsListContainer />)
}

describe('ComicsListContainer', () => {
  it('should make initial fetch & render ComicsList', async () => {
    initRender()

    // initial spinner
    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    // wait loading data
    await screen.findByRole('heading', { name: /comics list/i })
    await screen.findByTestId('comicsListUList')
    expect(screen.getAllByTestId('comicsListItem')).toHaveLength(24)

    // check for unmounting spinner
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()

    // check for no error
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument()
  })

  it('should handle known server errors', async () => {
    server.use(
      rest.get(`${BASE_MARVEL_URL}/comics`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server Error' }))
      }),
    )
    initRender()

    await screen.findByTestId('errorMessage')
    expect(screen.getByRole('heading', { name: /server error/i })).toBeInTheDocument()
  })

  it('should click on LoadMore & fetch additional comics', async () => {
    initRender()

    // wait loading data
    await screen.findByRole('heading', { name: /comics list/i })
    expect(screen.getAllByTestId('comicsListItem')).toHaveLength(24)

    // fetch additional comics via click
    userEvent.click(screen.getByRole('button', { name: /load more/i }))
    // loading started
    await screen.findByRole('button', { name: /loading.../i })
    // spinner should be only on initial fetching
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    // loading ended
    await screen.findByRole('heading', { name: /data is updated/i })

    // 47!, Not 48! - because of dubbled comics in fixtures - 'Avengers (2023) #5' with id 101517
    expect(screen.getAllByTestId('comicsListItem')).toHaveLength(47)
  })
})
