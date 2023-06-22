import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('should render heading', () => {
    render(<AppHeader />)

    const heading = screen.getByRole('heading', { name: /marvel portal/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render nav links', () => {
    render(<AppHeader />)

    const linkCharacters = screen.getByRole('link', { name: /characters/i })
    expect(linkCharacters).toBeInTheDocument()

    const linkComics = screen.getByRole('link', { name: /comics/i })
    expect(linkComics).toBeInTheDocument()
  })
})
