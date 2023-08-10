import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'

describe('App', () => {
  it('should make initial render properly', async () => {
    render(<App />)

    // AppHeader
    expect(screen.getByRole('heading', { name: /marvel portal/i })).toBeInTheDocument()

    // RandomChar
    await screen.findByTestId('randomCharTitle')

    // AppFooter
    expect(screen.getByRole('heading', { name: /project info/i })).toBeInTheDocument()
  })

  it('should go over navigation links & render certain pages', async () => {
    render(<App />)

    // characters page
    userEvent.click(screen.getByRole('link', { name: /characters/i }))
    await screen.findByRole('heading', { name: /characters list/i })

    // comics page
    userEvent.click(screen.getByRole('link', { name: /comics/i }))
    await screen.findByRole('heading', { name: /comics list/i })

    // home page
    userEvent.click(screen.getByRole('link', { name: /marvel portal/i }))
    await screen.findByTestId('randomCharTitle')
  })
})
