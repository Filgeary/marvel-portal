import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'

describe('App', () => {
  it('should render Heading & click on button', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /app-component/i })).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /app-button/i }))
  })
})
