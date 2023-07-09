import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import charResponseJSON from '../../__fixtures/api/character.json'
import RandomChar from './RandomChar'

/**
 * @type {import('../../types/ICharacter').ICharacterDataWrapper}
 */
const charResponseObj = JSON.parse(JSON.stringify(charResponseJSON))
const char = charResponseObj.data?.results?.at(0)

describe('RandomChar', () => {
  it('should render correctly with fixtures', () => {
    render(<RandomChar char={char} />)

    expect(screen.getByRole('heading', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /detail/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wiki/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /comiclink/i })).toBeInTheDocument()
    expect(
      screen.getByText(
        /^a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space. the team also includes drax, gamora,...$/i,
      ),
    ).toBeInTheDocument()
  })
})
