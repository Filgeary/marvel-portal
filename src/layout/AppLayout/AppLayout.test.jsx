import { render, screen } from '@testing-library/react'
import React from 'react'
import AppLayout from './AppLayout'

describe('AppLayout', () => {
  it('should render initial header & footer', () => {
    // @ts-ignore
    render(<AppLayout />)

    expect(screen.getByTestId('appHeader')).toBeInTheDocument()
    expect(screen.getByTestId('appFooter')).toBeInTheDocument()
  })
})
