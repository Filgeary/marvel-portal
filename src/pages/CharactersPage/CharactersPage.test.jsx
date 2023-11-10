import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../../App'
import { renderWithProviders } from '../../test/testUtils'

const initRender = () => {
  renderWithProviders(<App />, { route: '/characters' })
}

describe('CharactersPage', () => {
  it('should render properly', async () => {
    initRender()

    await screen.findByRole('heading', { name: /characters list/i })
  })

  it('should make navigation to character page by click on related charInfo', async () => {
    initRender()

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /select a character, please/i })).toBeInTheDocument()

    await screen.findByRole('heading', { name: /characters list/i })
    await screen.findByTestId('charListUList')
    userEvent.click(screen.getByRole('heading', { name: /guardians of the galaxy/i }))

    // charInfo block
    await screen.findByTestId('charInfo-charTitle')
    expect(
      screen.getByText(
        /a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space\. the team also includes drax, gamora, groot and rocket raccoon!/i,
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /comics:/i })).toBeInTheDocument()

    userEvent.click(screen.getByRole('link', { name: /go to character page/i }))
    await screen.findByTestId('singleCharacterPage')

    // wait loading data
    await screen.findByTestId('characterProfile')
    await screen.findByRole('heading', { name: /guardians of the galaxy/i })
  })
})
