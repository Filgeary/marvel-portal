import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { renderWithProviders } from '../test/testUtils'
import App from './App'

describe('App', () => {
  it('should make initial render properly', async () => {
    renderWithProviders(<App />)

    // AppHeader
    await screen.findByRole('heading', { name: /marvel portal/i })

    // RandomChar
    await screen.findByTestId('randomCharTitle')

    // AppFooter
    expect(screen.getByRole('heading', { name: /project info/i })).toBeInTheDocument()
  })

  it('should go over navigation links & render certain pages', async () => {
    renderWithProviders(<App />)

    // characters page
    userEvent.click(screen.getByTestId('navLink-characters'))
    await screen.findByTestId('charactersPage-heading')

    // comics page
    userEvent.click(screen.getByTestId('navLink-comics'))
    await screen.findByTestId('comicsPage-heading')

    // home page
    userEvent.click(screen.getByRole('link', { name: /marvel portal/i }))
    await screen.findByTestId('randomCharTitle')
  })

  it('should render NotFound404 on unknown route', async () => {
    renderWithProviders(<App />, { route: '/unknown-route' })

    await screen.findByTestId('notFound404')
  })
})
