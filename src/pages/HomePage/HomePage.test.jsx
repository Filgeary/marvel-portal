import { render, screen } from '@testing-library/react'
import React from 'react'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('should render properly', async () => {
    render(<HomePage />)

    await screen.findByTestId('randomCharTitle')
  })
})
