import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import CharactersPage from './CharactersPage'

const initRender = () => {
  render(<CharactersPage />)
}

describe('CharactersPage', () => {
  it('should render properly', async () => {
    initRender()

    await screen.findByRole('heading', { name: /characters list/i })
  })

  it('should click on charCard & show charInfo aside', async () => {
    initRender()

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /select a character, please/i })).toBeInTheDocument()

    await screen.findByRole('heading', { name: /characters list/i })
    await screen.findByTestId('charListUList')
    userEvent.click(screen.getByRole('heading', { name: /guardians of the galaxy/i }))

    await screen.findByTestId('charInfo-charTitle')

    // full description
    expect(
      screen.getByText(
        /a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space\. the team also includes drax, gamora, groot and rocket raccoon!/i,
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /comics:/i })).toBeInTheDocument()
  })
})
