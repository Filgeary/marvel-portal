import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import WelcomeScreenLinks from './WelcomeScreenLinks'

describe('WelcomeScreenLinks', () => {
  it('should render properly', () => {
    render(
      <MemoryRouter>
        <WelcomeScreenLinks />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('welcomeScreenLinks')).toBeInTheDocument()
  })
})
