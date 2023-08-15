import { screen } from '@testing-library/react'
import React from 'react'
import App from '../../App'
import { renderWithProviders } from '../../test/testUtils'

describe('SingleComicPage', () => {
  it('should handle certain comic path & render SingleComicPage', async () => {
    renderWithProviders(<App />, { route: '/comics/95790' })

    expect(screen.getByTestId('singleComicPage')).toBeInTheDocument()

    // wait loading data
    await screen.findByTestId('comicProfile')
    expect(
      screen.getByRole('heading', { name: /captain marvel \(2019\) #44/i }),
    ).toBeInTheDocument()
  })
})
