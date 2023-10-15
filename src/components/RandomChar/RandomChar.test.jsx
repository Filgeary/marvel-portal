import { render, screen } from '@testing-library/react'
import React from 'react'
import charResponseJSON from '../../__fixtures/api/characterById.json'
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
    expect(
      screen.getByText(
        /^A group of cosmic adventurers brought together by Star-Lord, the Guardians of the Galaxy protect the universe from threats all across space. The team also includes Drax, Gamora, Groot and Rocket Raccoon!$/i,
      ),
    ).toBeInTheDocument()
  })
})
