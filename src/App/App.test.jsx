import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'

describe('App', () => {
  it('should render heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { name: /marvel portal/i })
    expect(heading).toBeInTheDocument()
  })
})
