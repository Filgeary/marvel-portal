import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('should render properly', () => {
    render(
      <MemoryRouter>
        <AppHeader />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /marvel portal/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /characters/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /comics/i })).toBeInTheDocument()
  })
})
