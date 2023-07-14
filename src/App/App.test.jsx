import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'

describe('App', () => {
  it('should make initial render properly', async () => {
    render(<App />)

    // RandomChar
    await screen.findByTestId('randomCharTitle')

    // AppHeader
    expect(screen.getByRole('heading', { name: /marvel portal/i })).toBeInTheDocument()

    // CharList & CharInfo
    expect(screen.getByRole('heading', { name: /characters list/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /no selected char/i })).toBeInTheDocument()

    // AppFooter
    expect(screen.getByRole('heading', { name: /project info/i })).toBeInTheDocument()
  })
})
