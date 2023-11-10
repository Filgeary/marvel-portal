import { render, screen } from '@testing-library/react'
import React from 'react'
import characterResponseJson from '../../__fixtures/api/characterById.json'
import CharacterProfile from './CharacterProfile'

/**
 * @type {import('../../types/ICharacter').ICharacterDataWrapper}
 */
const characterResponseObj = JSON.parse(JSON.stringify(characterResponseJson))
const character = characterResponseObj?.data?.results?.at(0)

describe('CharacterProfile', () => {
  it('should render properly', () => {
    render(<CharacterProfile character={character} />)

    expect(screen.getByTestId('characterProfile')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /guardians of the galaxy/i })).toBeInTheDocument()

    // full description
    expect(
      screen.getByText(
        /a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space\. the team also includes drax, gamora, groot and rocket raccoon!/i,
      ),
    ).toBeInTheDocument()
  })
})
