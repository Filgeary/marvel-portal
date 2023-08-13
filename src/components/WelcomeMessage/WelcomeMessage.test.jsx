import { render, screen } from '@testing-library/react'
import React from 'react'
import WelcomeMessage from './WelcomeMessage'

describe('WelcomeMessage', () => {
  it('should render Heading', () => {
    render(<WelcomeMessage />)

    expect(
      screen.getByRole('heading', { name: /welcome to marvelous portal!/i }),
    ).toBeInTheDocument()
  })
})
