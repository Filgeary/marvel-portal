import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import charResponseJSON from '../../__fixtures/api/character.json'
import CharInfo from './CharInfo'

/**
 * @type {import('../../types/ICharacter').ICharacterDataWrapper}
 */
const charResponseObj = JSON.parse(JSON.stringify(charResponseJSON))
const char = charResponseObj.data?.results?.at(0)

const initRender = char => {
  render(<CharInfo char={char} />)
}

describe('CharInfo', () => {
  it('should render properly with fixtures', () => {
    initRender(char)

    expect(screen.getByRole('heading', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /detail/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wiki/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /comiclink/i })).toBeInTheDocument()

    // full description
    expect(
      screen.getByText(
        /a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space\. the team also includes drax, gamora, groot and rocket raccoon!/i,
      ),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /comics:/i })).toBeInTheDocument()
    expect(screen.getByText(/shown 20 from 382/i)).toBeInTheDocument()
    expect(screen.getAllByTestId('charInfo-listItemComic')).toHaveLength(20)
  })

  it('should render fallback if char was not provided', () => {
    initRender()

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /select a character, please/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /guardians of the galaxy/i }),
    ).not.toBeInTheDocument()
  })
})
