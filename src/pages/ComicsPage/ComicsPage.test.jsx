import { render, screen } from '@testing-library/react'
import React from 'react'
import ComicsPage from './ComicsPage'

describe('ComicsPage', () => {
  it('should render properly', async () => {
    render(<ComicsPage />)

    expect(screen.getByTestId('comicsBanner')).toBeInTheDocument()
    await screen.findByRole('heading', { name: /comics list/i })
  })
})
