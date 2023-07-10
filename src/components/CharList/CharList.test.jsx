import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import allCharsResponseJSON from '../../__fixtures/api/allCharacters.json'
import CharList from './CharList'

/**
 * @type {import('../../types/ICharacter').ICharacterDataWrapper}
 */
const allCharsResponseObj = JSON.parse(JSON.stringify(allCharsResponseJSON))
const charList = allCharsResponseObj.data?.results

const initRender = () => {
  const onClickCharCardMocked = jest.fn()
  const onLoadMoreMocked = jest.fn()

  render(
    <CharList
      charList={charList}
      onClickCharCard={onClickCharCardMocked}
      onLoadMore={onLoadMoreMocked}
    />,
  )

  return {
    onClickCharCardMocked,
    onLoadMoreMocked,
  }
}

describe('CharList', () => {
  it('should render properly & click on controls', () => {
    const { onClickCharCardMocked, onLoadMoreMocked } = initRender()

    expect(screen.getByRole('heading', { name: /characters list/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('charListItem')).toHaveLength(18)

    screen.getByRole('button', { name: /load more/i }).click()
    expect(onLoadMoreMocked).toBeCalledTimes(1)

    screen.getByRole('heading', { name: /guardians of the galaxy/i }).click()
    expect(onClickCharCardMocked).toBeCalledWith(
      'http://gateway.marvel.com/v1/public/characters/1011299',
    )
  })
})
