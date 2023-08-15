import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithProviders } from '../../test/testUtils'
import ComicsPage from './ComicsPage'

describe('ComicsPage', () => {
  it('should render properly', async () => {
    renderWithProviders(<ComicsPage />)

    expect(screen.getByTestId('comicsBanner')).toBeInTheDocument()
    await screen.findByRole('heading', { name: /comics list/i })
  })
})
