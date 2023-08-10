// @ts-nocheck
import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import AppLayout from './AppLayout'

describe('AppLayout', () => {
  it('should render initial header & footer', () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('appHeader')).toBeInTheDocument()
    expect(screen.getByTestId('appFooter')).toBeInTheDocument()
  })
})
