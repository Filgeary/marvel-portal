import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'

describe('App', () => {
  it('should render properly all components', async () => {
    render(<App />)

    await screen.findByTestId('randomCharTitle')
    expect(screen.getByRole('heading', { name: /marvel portal/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /characters list/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /char info/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /project info/i })).toBeInTheDocument()
  })
})
