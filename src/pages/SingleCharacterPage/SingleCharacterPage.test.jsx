import { screen } from '@testing-library/react'
import React from 'react'
import App from '../../App'
import { renderWithProviders } from '../../test/testUtils'

describe('SingleCharacterPage', () => {
  it('should handle certain character path & render SingleCharacterPage', async () => {
    renderWithProviders(<App />, { route: '/characters/1011299' })

    await screen.findByTestId('singleCharacterPage')

    // wait loading data
    await screen.findByTestId('characterProfile')
    await screen.findByRole('heading', { name: /guardians of the galaxy/i })
  })
})
