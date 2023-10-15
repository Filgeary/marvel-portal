import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('should render properly', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )

    await screen.findByTestId('randomCharTitle')
  })
})
