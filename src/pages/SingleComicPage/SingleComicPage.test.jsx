import { screen } from '@testing-library/react'
import React from 'react'
import App from '../../App'
import { renderWithProviders } from '../../test/testUtils'

describe('SingleComicPage', () => {
  it('should handle certain comic path & render SingleComicPage', async () => {
    renderWithProviders(<App />, { route: '/comics/95790' })

    await screen.findByTestId('singleComicPage')

    // wait loading data
    await screen.findByTestId('comicProfile')
    await screen.findByRole('heading', { name: /captain marvel \(2019\) #44/i })
  })
})
