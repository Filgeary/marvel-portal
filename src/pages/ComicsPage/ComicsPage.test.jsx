import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import ComicsPage from './ComicsPage'

describe('ComicsPage', () => {
  it('should render properly', async () => {
    render(
      <MemoryRouter>
        <ComicsPage />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('comicsBanner')).toBeInTheDocument()
    await screen.findByRole('heading', { name: /comics list/i })
  })
})
