import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import allCharsResponseJSON from '../../__fixtures/api/allCharacters.json'
import CharList from './CharList'

/**
 * @type {import('../../types/ICharacter').ICharacterDataWrapper}
 */
const allCharsResponseObj = JSON.parse(JSON.stringify(allCharsResponseJSON))
const charList = allCharsResponseObj.data?.results

const initRender = (charListParam, isLoading = false, hasMoreChars = true) => {
  const onSelectCharMocked = jest.fn()
  const onLoadMoreMocked = jest.fn()

  render(
    <CharList
      charList={charListParam || charList}
      onSelectChar={onSelectCharMocked}
      onLoadMore={onLoadMoreMocked}
      isLoading={isLoading}
      hasMoreChars={hasMoreChars}
    />,
  )

  return {
    onSelectCharMocked,
    onLoadMoreMocked,
  }
}

describe('CharList', () => {
  it('should render properly & click on controls', () => {
    const { onSelectCharMocked, onLoadMoreMocked } = initRender()

    expect(screen.getByRole('heading', { name: /characters list/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('charListItem')).toHaveLength(18)

    userEvent.click(screen.getByRole('button', { name: /load more/i }))
    expect(onLoadMoreMocked).toBeCalledTimes(1)

    userEvent.click(screen.getByRole('heading', { name: /guardians of the galaxy/i }))
    expect(onSelectCharMocked).toBeCalledWith(1011299) // id
  })

  it('should render fallback if charList is empty array', () => {
    initRender([])

    // not presence in dom
    expect(screen.queryByRole('heading', { name: /characters list/i })).not.toBeInTheDocument()
    expect(screen.queryAllByTestId('charListItem')).toHaveLength(0)
    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument()

    // fallback
    expect(screen.getByRole('heading', { name: /characters not found!/i })).toBeInTheDocument()
  })

  it('should show loading text if data is loading', () => {
    initRender(charList, true)

    expect(screen.getByRole('button', { name: /loading.../i })).toBeInTheDocument()
  })

  it('should show fallback text if no more chars to fetch', () => {
    initRender(charList, false, false)

    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /No More Characters!/i })).toBeInTheDocument()
  })
})
