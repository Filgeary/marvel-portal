import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import comicsResponseJSON from '../../__fixtures/api/comics.json'
import ComicsList from './ComicsList'

/**
 * @type {import('../../types/IComic').IComicDataWrapper}
 */
const comicsResponseObj = JSON.parse(JSON.stringify(comicsResponseJSON))
const comicsList = comicsResponseObj.data?.results

const initRender = (comicsListArg, isLoading = false, hasMoreComics = true) => {
  const onLoadMoreMocked = jest.fn()

  render(
    <MemoryRouter>
      <ComicsList
        comicsList={comicsListArg ?? comicsList}
        onLoadMore={onLoadMoreMocked}
        isLoading={isLoading}
        hasMoreComics={hasMoreComics}
      />
    </MemoryRouter>,
  )

  return {
    onLoadMoreMocked,
  }
}

describe('ComicsList', () => {
  it('should render properly & click on controls', () => {
    const { onLoadMoreMocked } = initRender()

    expect(screen.getByRole('heading', { name: /comics list/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('comicsListItem')).toHaveLength(24)

    userEvent.click(screen.getByRole('button', { name: /load more/i }))
    expect(onLoadMoreMocked).toBeCalledTimes(1)
  })

  it('should render fallback if comicsList is empty array', () => {
    initRender([])

    // not presence in dom
    expect(screen.queryByRole('heading', { name: /comics list/i })).not.toBeInTheDocument()
    expect(screen.queryAllByTestId('comicsListItem')).toHaveLength(0)
    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument()

    // fallback
    expect(screen.getByRole('heading', { name: /comics not found!/i })).toBeInTheDocument()
  })

  it('should show loading text if data is loading', () => {
    initRender(comicsList, true)

    expect(screen.getByRole('button', { name: /loading.../i })).toBeInTheDocument()
  })

  it('should not show `load more` button if no more comics to fetch', () => {
    initRender(comicsList, false, false)

    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument()
  })
})
