import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import React from 'react'
import { BASE_MARVEL_URL } from '../../constants'
import { server } from '../../test/mocks/server'
import CharListContainer from './CharListContainer'

const initRender = (shouldFilterWithImages = false) => {
  const onSelectCharMocked = jest.fn()

  render(
    <CharListContainer
      onSelectChar={onSelectCharMocked}
      shouldFilterWithImages={shouldFilterWithImages}
    />,
  )

  return {
    onSelectCharMocked,
  }
}

describe('CharListContainer', () => {
  it('should make initial fetch & render CharList', async () => {
    initRender()

    // initial spinner
    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    // wait loading data
    await screen.findByRole('heading', { name: /characters list/i })
    await screen.findByTestId('charListUList')
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

  it('should click on charCard & call cb', async () => {
    const { onSelectCharMocked } = initRender()

    // wait loading data
    await screen.findByRole('heading', { name: /characters list/i })
    await screen.findByTestId('charListUList')

    userEvent.click(screen.getByRole('heading', { name: /guardians of the galaxy/i }))
    expect(onSelectCharMocked).toHaveBeenCalledTimes(1)
  })

  it('should click on LoadMore & fetch additional chars', async () => {
    initRender()

    // wait loading data
    await screen.findByRole('heading', { name: /characters list/i })
    expect(screen.getAllByTestId('charListItem')).toHaveLength(18)

    // fetch additional chars via click
    userEvent.click(screen.getByRole('button', { name: /load more/i }))
    await screen.findByRole('button', { name: /loading.../i })
    await screen.findByRole('heading', { name: /data is updated/i })
    expect(screen.getAllByTestId('charListItem')).toHaveLength(36)
  })
})
